import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState<string>(''); // 출력할 텍스트
  const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true); // 커서 깜박임 상태

  useEffect(() => {
    setDisplayText(''); // 상태 초기화

    let index = 0; // 인덱스 초기화
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index)); // 현재 인덱스의 글자 추가
        index++; // 인덱스 증가
      } else {
        clearInterval(typingInterval); // 모든 글자가 출력되면 인터벌 종료
      }
    }, speed);

    // 커서 깜박임 효과
    const cursorBlink = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);

    // 언마운트 시 타이머 정리
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorBlink);
    };
  }, [text, speed]);

  return (
    <h1 className="text-3xl font-bold text-sky-400">
      {displayText}
      <span className={`${isCursorVisible ? 'inline' : 'hidden'}`}>|</span>
    </h1>
  );
};

export default TypingEffect;


