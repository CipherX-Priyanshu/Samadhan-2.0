import React, { useState } from 'react';

function CounterTextPreview() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('en');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const placeholder = language === 'en' ? 'Type something...' : 'कुछ टाइप करें...';
  const typedText = language === 'en' ? `You typed: ${text || 'Nothing yet!'}` : `आपने टाइप किया: ${text || 'अभी तक कुछ नहीं!'}`;
  const counterLabel = language === 'en' ? 'Counter' : 'काउंटर';
  const title = language === 'en' ? 'Counter + Live Text Preview' : 'काउंटर + लाइव टेक्स्ट प्रीव्यू';
  const incrementLabel = language === 'en' ? 'Increment' : 'वृद्धि';
  const decrementLabel = language === 'en' ? 'Decrement' : 'घटाना';
  const textPreviewLabel = language === 'en' ? 'Live Text Preview' : 'लाइव टेक्स्ट प्रीव्यू';
  const toggleButtonLabel = language === 'en' ? 'Switch to Hindi' : 'अंग्रेजी में स्विच करें';

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', padding: '16px' }}>
      <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
          {title}
        </h1>
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={toggleLanguage}
            style={{ backgroundColor: '#22c55e', color: 'white', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
          >
            {toggleButtonLabel}
          </button>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600' }}>{counterLabel}</h2>
          <p style={{ fontSize: '20px', marginBottom: '8px' }}>Count: {count}</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button
              onClick={handleIncrement}
              style={{ backgroundColor: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
            >
              {incrementLabel}
            </button>
            <button
              onClick={handleDecrement}
              style={{ backgroundColor: '#ef4444', color: 'white', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}
            >
              {decrementLabel}
            </button>
          </div>
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '600' }}>{textPreviewLabel}</h2>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder={placeholder}
            style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px', marginTop: '8px' }}
          />
          <p style={{ marginTop: '8px' }}>{typedText}</p>
        </div>
      </div>
    </div>
  );
}

export default CounterTextPreview;