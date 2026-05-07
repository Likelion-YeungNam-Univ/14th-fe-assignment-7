import React from 'react';
import VideoContent from './VideoContent';
import CommentList from '../comment/CommentList';

const MainSection = () => {
  return (
    <div>
      <VideoContent />
      <CommentList />
    </div>
  );
};

export default MainSection;
