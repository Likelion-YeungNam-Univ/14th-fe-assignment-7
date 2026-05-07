import React from 'react';
import CardSection from './right/CardSection';
import MainSection from './left/MainSection';

const VideoDetailPage = () => {
  return (
    <div className="flex justify-center mt-12">
      <MainSection />
      <CardSection />
    </div>
  );
};

export default VideoDetailPage;
