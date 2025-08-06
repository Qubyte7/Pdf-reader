import React, { useState, useEffect, useRef } from 'react';
import { FaRegFilePdf, FaPlay, FaPause } from "react-icons/fa6";
import { IoPlayForward, IoPlayBack, IoExit } from "react-icons/io5";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import * as pdfjs from 'pdfjs-dist';

// Initialize PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MainPage = () => {
    const [playclicked, setPlayClicked] = useState(false);
    const [pdfDoc, setPdfDoc] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [fileName, setFileName] = useState("Upload a PDF");
    const [isReading, setIsReading] = useState(false);
    
    const fileInputRef = useRef(null);
    const speechSynthRef = useRef(window.speechSynthesis);
    const utteranceRef = useRef(null);

    useEffect(() => {
        // Load last saved page from localStorage
        const savedPage = localStorage.getItem('lastReadPage');
        if (savedPage) {
            setCurrentPage(parseInt(savedPage));
        }

        // Cleanup speech synthesis on component unmount
        return () => {
            if (speechSynthRef.current.speaking) {
                speechSynthRef.current.cancel();
            }
        };
    }, []);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setFileName(file.name);
            const fileReader = new FileReader();
            
            fileReader.onload = async function() {
                const typedArray = new Uint8Array(this.result);
                try {
                    const pdf = await pdfjs.getDocument(typedArray).promise;
                    setPdfDoc(pdf);
                    setTotalPages(pdf.numPages);
                    loadPageText(pdf, currentPage);
                } catch (error) {
                    console.error("Error loading PDF:", error);
                }
            };
            
            fileReader.readAsArrayBuffer(file);
        }
    };

    const loadPageText = async (pdf, pageNum) => {
        try {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const text = textContent.items
                .map(item => item.str)
                .join(' ')
                .trim();
            
            // Basic text preprocessing
            const processedText = preprocessText(text);
            setCurrentText(processedText);
            
            // Save current page to localStorage
            localStorage.setItem('lastReadPage', pageNum.toString());
        } catch (error) {
            console.error("Error extracting text:", error);
        }
    };

    const preprocessText = (text) => {
        // Remove headers/footers (basic example - customize based on your PDFs)
        let processed = text.replace(/^.*\d+.*$/mg, ''); // Remove lines with page numbers
        processed = processed.replace(/^\s*\d+\s*$/, ''); // Remove standalone numbers
        return processed.trim();
    };

    const handlePlayPause = () => {
        if (!currentText) return;

        if (isReading) {
            speechSynthRef.current.pause();
            setIsReading(false);
            setPlayClicked(false);
        } else {
            if (utteranceRef.current) {
                speechSynthRef.current.resume();
            } else {
                utteranceRef.current = new SpeechSynthesisUtterance(currentText);
                utteranceRef.current.rate = 1;
                utteranceRef.current.pitch = 1;
                utteranceRef.current.onend = () => {
                    setIsReading(false);
                    setPlayClicked(false);
                    if (currentPage < totalPages) {
                        setCurrentPage(prev => prev + 1);
                        loadPageText(pdfDoc, currentPage + 1);
                    }
                };
                speechSynthRef.current.speak(utteranceRef.current);
            }
            setIsReading(true);
            setPlayClicked(true);
        }
    };

    const handlePageChange = async (direction) => {
        if (!pdfDoc) return;
        
        const newPage = direction === 'next' 
            ? Math.min(currentPage + 1, totalPages)
            : Math.max(currentPage - 1, 1);
            
        if (newPage !== currentPage) {
            setCurrentPage(newPage);
            await loadPageText(pdfDoc, newPage);
        }
    };

    // Add file input trigger function
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <div className="bg-background min-h-[100vh] text-white font-poppins">
                {/* ...existing header code... */}

                {/* Add hidden file input */}
                <input 
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="application/pdf"
                    onChange={handleFileUpload}
                />

                {/* Modify the PDF icon section to include upload button */}
                <div className="flex flex-row justify-between px-4 sm:px-20 py-3 sm:py-5">
                    <div className="flex flex-row gap-2 sm:gap-5 items-center">
                        <button 
                            onClick={triggerFileInput}
                            className="flex items-center gap-2 hover:opacity-80"
                        >
                            <FaRegFilePdf color="#E7FF00" size={30} className="sm:text-[30px]"/>
                            <p className="text-lg sm:text-xl">{fileName}</p>
                        </button>
                    </div>
                    {/* ...existing exit button code... */}
                </div>

                {/* Update the content section */}
                <div className="bg-light-background text-lg sm:text-2xl h-[400px] sm:h-[350px] w-[95%] sm:w-[90%] mx-auto rounded-xl p-5 relative">
                    <div className="absolute inset-x-0 top-0 h-16 sm:h-20 rounded-xl z-10 bg-gradient-to-b from-light-background to-transparent pointer-events-none"></div>
                    <div className="h-full overflow-y-auto scrollbar-hide">
                        <p className="px-3 sm:px-7">
                            {currentText || "Upload a PDF to start reading"}
                        </p>
                    </div>
                    <div className="absolute inset-x-0 rounded-xl bottom-0 h-16 sm:h-20 bg-gradient-to-t from-light-background to-transparent"></div>
                </div>

                {/* Update the controls section */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mt-6 sm:mt-10 px-4 sm:px-0">
                    <div className="flex flex-row items-center gap-6 sm:gap-10">
                        <IoPlayBack 
                            color="#BFCC3E" 
                            size={28} 
                            className="cursor-pointer sm:text-[32px]"
                            onClick={() => handlePageChange('prev')}
                        />
                        <div 
                            className="p-4 sm:p-5 bg-primary rounded-full cursor-pointer" 
                            onClick={handlePlayPause}
                        >
                            {playclicked ? (
                                <FaPause color="black" size={28} className="sm:text-[32px]" />
                            ) : (
                                <FaPlay color="black" size={28} className="sm:text-[32px]" />
                            )}
                        </div>
                        <IoPlayForward 
                            color="#BFCC3E" 
                            size={28} 
                            className="cursor-pointer sm:text-[32px]"
                            onClick={() => handlePageChange('next')}
                        />
                    </div>
                    <p className="text-center sm:absolute sm:right-0 sm:pr-24 text-lg sm:text-xl">
                        Page <strong className="text-primary">{currentPage}</strong> of {totalPages || 0}
                    </p>
                </div>
            </div>
        </>
    );
};

export default MainPage;