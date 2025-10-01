import React, { useState, useCallback } from 'react';
import { ImageUploader } from './components/ImageUploader';
import { Spinner } from './components/Spinner';
import { generateHugImage } from './services/geminiService';
import { Icon } from './components/Icon';

const backgroundOptions = [
  { id: 'vibrant', label: 'Vibrant Sky', icon: 'sparkles' as const },
  { id: 'sunset', label: 'Sunset', icon: 'sunset' as const },
  { id: 'forest', label: 'Forest', icon: 'forest' as const },
  { id: 'beach', label: 'Beach', icon: 'beach' as const },
  { id: 'space', label: 'Outer Space', icon: 'space' as const },
  { id: 'underwater', label: 'Underwater', icon: 'underwater' as const },
  { id: 'castle', label: 'Fantasy Castle', icon: 'castle' as const },
  { id: 'aurora', label: 'Northern Lights', icon: 'aurora' as const },
  { id: 'mountains', label: 'Mountain Peak', icon: 'mountains' as const },
  { id: 'sakura', label: 'Cherry Blossoms', icon: 'sakura' as const },
  { id: 'rainyCity', label: 'Rainy City', icon: 'rainyCity' as const },
  { id: 'balloons', label: 'Hot Air Balloons', icon: 'balloons' as const },
];

const hugPoseOptions = [
  { id: 'tight', label: 'Tight Hug', icon: 'hugTight' as const },
  { id: 'side', label: 'Side Hug', icon: 'hugSide' as const },
  { id: 'playful', label: 'Playful Hug', icon: 'hugPlayful' as const },
];

const aspectRatioOptions = [
  { id: 'square', label: 'Square', icon: 'square' as const },
  { id: 'landscape', label: 'Landscape', icon: 'landscape' as const },
  { id: 'portrait', label: 'Portrait', icon: 'portrait' as const },
];

const qualityOptions = [
    { id: 'standard', label: 'Standard', icon: 'qualityStandard' as const },
    { id: 'high', label: 'High', icon: 'qualityHigh' as const },
];


const App: React.FC = () => {
  const [photo1, setPhoto1] = useState<File | null>(null);
  const [photo2, setPhoto2] = useState<File | null>(null);
  const [photo1Preview, setPhoto1Preview] = useState<string | null>(null);
  const [photo2Preview, setPhoto2Preview] = useState<string | null>(null);
  const [backgroundStyle, setBackgroundStyle] = useState('vibrant');
  const [hugPose, setHugPose] = useState('tight');
  const [aspectRatio, setAspectRatio] = useState('square');
  const [quality, setQuality] = useState('standard');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePhoto1Upload = (file: File) => {
    setPhoto1(file);
    setPhoto1Preview(URL.createObjectURL(file));
  };

  const handlePhoto2Upload = (file: File) => {
    setPhoto2(file);
    setPhoto2Preview(URL.createObjectURL(file));
  };

  const handleGenerate = useCallback(async () => {
    if (!photo1 || !photo2) {
      setError("Please upload both photos before generating.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    try {
      const result = await generateHugImage(photo1, photo2, backgroundStyle, aspectRatio, quality, hugPose);
      setGeneratedImage(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [photo1, photo2, backgroundStyle, aspectRatio, quality, hugPose]);

  const handleReset = () => {
    setPhoto1(null);
    setPhoto2(null);
    setPhoto1Preview(null);
    setPhoto2Preview(null);
    setGeneratedImage(null);
    setError(null);
    setIsLoading(false);
    setBackgroundStyle('vibrant');
    setHugPose('tight');
    setAspectRatio('square');
    setQuality('standard');
  };

  const handleSaveImage = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = 'photo-hug.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-500 text-gray-800 flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
      <main className="container mx-auto max-w-4xl w-full">
        <header className="text-center mb-8">
          <div className="inline-flex items-center gap-4">
            <Icon name="hug" className="w-16 h-16 text-white"/>
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-shadow">Photo Hug Generator</h1>
          </div>
          <p className="text-lg text-white/90 mt-2 max-w-2xl mx-auto">
            Upload two photos and let AI create a magical image of them hugging against a beautiful, vibrant backdrop!
          </p>
        </header>

        <div className="bg-white/70 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <ImageUploader
              id="photo1"
              label="Photo 1 (The Hugger)"
              onImageUpload={handlePhoto1Upload}
              previewUrl={photo1Preview}
              icon={<Icon name="person1" className="w-16 h-16 text-blue-500" />}
            />
            <ImageUploader
              id="photo2"
              label="Photo 2 (The Hugged)"
              onImageUpload={handlePhoto2Upload}
              previewUrl={photo2Preview}
              icon={<Icon name="person2" className="w-16 h-16 text-pink-500" />}
            />
          </div>

           <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3 text-center">Choose a Hug Pose</label>
            <div className="grid grid-cols-3 gap-3">
              {hugPoseOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setHugPose(option.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200 ${
                    hugPose === option.id
                      ? 'border-blue-500 bg-blue-100/50 shadow-md'
                      : 'border-gray-300 bg-white/50 hover:border-blue-400 hover:bg-blue-50/50'
                  }`}
                  aria-pressed={hugPose === option.id}
                >
                  <Icon name={option.icon} className="w-8 h-8 text-blue-600 mb-1" />
                  <span className="text-sm font-semibold text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

           <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3 text-center">Choose a Background Style</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {backgroundOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setBackgroundStyle(option.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200 ${
                    backgroundStyle === option.id
                      ? 'border-blue-500 bg-blue-100/50 shadow-md'
                      : 'border-gray-300 bg-white/50 hover:border-blue-400 hover:bg-blue-50/50'
                  }`}
                  aria-pressed={backgroundStyle === option.id}
                >
                  <Icon name={option.icon} className="w-8 h-8 text-blue-600 mb-1" />
                  <span className="text-sm font-semibold text-gray-700 text-center">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          
           <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3 text-center">Choose an Aspect Ratio</label>
            <div className="grid grid-cols-3 gap-3">
              {aspectRatioOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setAspectRatio(option.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200 ${
                    aspectRatio === option.id
                      ? 'border-blue-500 bg-blue-100/50 shadow-md'
                      : 'border-gray-300 bg-white/50 hover:border-blue-400 hover:bg-blue-50/50'
                  }`}
                  aria-pressed={aspectRatio === option.id}
                >
                  <Icon name={option.icon} className="w-8 h-8 text-blue-600 mb-1" />
                  <span className="text-sm font-semibold text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          
           <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3 text-center">Choose Image Quality</label>
            <div className="grid grid-cols-2 gap-3">
              {qualityOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setQuality(option.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all duration-200 ${
                    quality === option.id
                      ? 'border-blue-500 bg-blue-100/50 shadow-md'
                      : 'border-gray-300 bg-white/50 hover:border-blue-400 hover:bg-blue-50/50'
                  }`}
                  aria-pressed={quality === option.id}
                >
                  <Icon name={option.icon} className="w-8 h-8 text-blue-600 mb-1" />
                  <span className="text-sm font-semibold text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleGenerate}
              disabled={!photo1 || !photo2 || isLoading}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              {isLoading ? (
                <>
                  <Spinner />
                  Generating Magic...
                </>
              ) : (
                <>
                  <Icon name="sparkles" className="w-6 h-6" />
                  Generate Hug
                </>
              )}
            </button>
             <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-colors duration-300"
              >
                Reset
              </button>
          </div>

          {error && (
            <div className="mt-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-lg" role="alert">
              <p className="font-bold">Oops!</p>
              <p>{error}</p>
            </div>
          )}

          {generatedImage && (
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Hug Image!</h2>
              <div className="bg-gradient-to-br from-blue-200 to-indigo-200 p-2 rounded-xl shadow-inner">
                <img
                  src={generatedImage}
                  alt="Generated hug"
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
               <button
                  onClick={handleSaveImage}
                  className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
                >
                  <Icon name="download" className="w-6 h-6" />
                  Save Image
                </button>
            </div>
          )}
        </div>
        <footer className="text-center mt-8 text-white/80">
          <p>Powered by Gemini API</p>
        </footer>
      </main>
    </div>
  );
};

export default App;