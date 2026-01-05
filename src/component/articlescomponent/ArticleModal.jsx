import React from 'react';

const ArticleModal = ({ isOpen, onClose, article }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
      {/* Modal wrapper */}
      <div className="min-h-screen flex items-start justify-center py-10 px-4">
        
        {/* Modal box */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative max-h-[90vh] overflow-y-auto p-8">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
          >
            &times;
          </button>

          {/* Article Image */}
          {article.imageSrc && (
            <img
              src={article.imageSrc}
              alt={article.title}
              className="w-full h-64 object-cover rounded-2xl mb-6"
            />
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          {/* Date */}
          <p className="text-sm text-gray-500 mb-6">{article.date}</p>

          {/* Description */}
          <p className="text-lg text-gray-700 mb-8">
            {article.description}
          </p>

          {/* Full Content */}
          <div className="prose prose-lg text-gray-800 max-w-none">
            <p>{article.fullContent}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArticleModal;
