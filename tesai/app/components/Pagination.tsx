import React from 'react';

interface PaginationProps {
    exercisesPerPage: number;
    totalExercises: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ exercisesPerPage, totalExercises, paginate, currentPage }) => {
    const pageNumbers: (number | string)[] = [];
    const totalPages = Math.ceil(totalExercises / exercisesPerPage);
    const maxVisiblePages = 2; // Reduced number of visible pages on each side

    const generatePageNumbers = () => {
        if (totalPages <= maxVisiblePages * 2 + 5) {
            // Less pages than maximum visible, show all
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            // Show limited pages
            pageNumbers.push(1); // First page
            let start = Math.max(2, currentPage - maxVisiblePages);
            let end = Math.min(totalPages - 1, currentPage + maxVisiblePages);

            if (currentPage <= maxVisiblePages + 2) {
                end = maxVisiblePages * 2 + 1;
            } else if (currentPage >= totalPages - maxVisiblePages - 1) {
                start = totalPages - maxVisiblePages * 2 - 1;
            }

            if (start > 2) pageNumbers.push('...'); // Ellipsis before start
            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }
            if (end < totalPages - 1) pageNumbers.push('...'); // Ellipsis after end

            pageNumbers.push(totalPages); // Last page
        }
    };

    generatePageNumbers();

    return (
        <nav>
            <ul className="pagination flex justify-center items-center">
                {pageNumbers.map((number, index) => (
                    <li key={index} className={`mx-2 ${number === currentPage ? 'font-bold text-[#FF4400] bg-white rounded' : ''}`}>
                        {typeof number === 'number' ? (
                            <button onClick={() => paginate(number)} className={`
                            max-w-[45px] 
                            border 
                            rounded 
                            ${number > 9 && !(number.toString().includes('1')) ? "pl-2.5 pr-2.5" : "px-4 py-2"}
                            ${number > 9 && (number.toString().includes('1')) ? "pl-3 pr-3 py-2" : "px-4 py-2"}
                            "pl-4 pr-4 py-2"`}
                            >
                                {number}
                            </button>
                        ) : (
                            <span className="px-3.5 py-2.5 border max-w-[45px] rounded">{number}</span>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
