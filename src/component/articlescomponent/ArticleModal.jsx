import React from 'react';

const ArticleModal = ({ isOpen, onClose, article }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      {/* Modal wrapper */}
      <div className="min-h-screen flex items-start justify-center py-6 px-4 sm:py-10 sm:px-6">
        
        {/* Modal box */}
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-3xl relative max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl"
          >
            &times;
          </button>

          {/* Article Image */}
          {article.imageSrc && (
            <img
              src={article.imageSrc}
              alt={article.title}
              className="w-full h-48 sm:h-64 object-cover rounded-2xl mb-4 sm:mb-6"
            />
          )}

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            {article.title}
          </h1>

          {/* Date */}
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">{article.date}</p>

          {/* Description */}
          <p className="text-sm sm:text-lg text-gray-700 mb-6 sm:mb-8">
            {article.description}
          </p>

          {/* Full Content */}
          <div className="prose prose-sm sm:prose-lg text-gray-800 max-w-none">
            <p>{article.fullContent}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
