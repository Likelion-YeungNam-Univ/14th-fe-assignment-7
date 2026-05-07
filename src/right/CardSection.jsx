import React from 'react';
import Card from './Card';

const CardSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card
        image="https://picsum.photos/280/120"
        title="테스트 제목1"
        description="테스트 설명문1"
      />
      <Card
        image="https://picsum.photos/280/120"
        title="테스트 제목2"
        description="테스트 설명문2"
      />
      <Card
        image="https://picsum.photos/280/120"
        title="테스트 제목3"
        description="테스트 설명문3"
      />
    </div>
  );
};

export default CardSection;
