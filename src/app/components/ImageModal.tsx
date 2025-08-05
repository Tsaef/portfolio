import React, {useEffect} from 'react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  title?: string
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  src,
  alt,
  title
}) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(0,0,0,0.3)]"
      onClick={onClose}
    >
      <div
        className="relative max-w-none bg-white rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: '90vh',
          maxWidth: '95vw'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b flex-shrink-0">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="ml-auto p-2 hover:cursor-pointer hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Image Container */}
        <div className="relative bg-gray-100 flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="80vw"
            className="w-full h-auto object-contain"
            style={{
              maxHeight: 'calc(90vh - 120px)',
              width: '100%',
              height: 'auto'
            }}
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement!
              parent.innerHTML = `
                <div class="flex items-center justify-center h-48">
                  <div class="text-center">
                    <div class="text-gray-400 mb-2">
                      <svg class="w-16 h-16 mx-auto" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500">Image could not be loaded</p>
                  </div>
                </div>
              `
            }}
          />
        </div>

        {/* Footer hint */}
        <div className="p-3 bg-gray-50 border-t text-center flex-shrink-0">
          <p className="text-sm text-gray-500">
            Press <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">ESC</kbd> or click outside to close
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageModal
