import { useEffect, useState } from "react";

// Simplified Postman to Bruno script translator
const postmanTranslation = (script) => {
  if (!script || script.trim() === '') {
    return script;
  }

  try {
    let translatedScript = script;

    // Basic Postman to Bruno API conversions
    const conversions = [
      // Test function conversions
      {
        pattern: /pm\.test\s*\(\s*["'`]([^"'`]+)["'`]\s*,\s*function\s*\(\s*\)\s*\{/g,
        replacement: 'test("$1", function() {'
      },
      // Response status conversions
      {
        pattern: /pm\.response\.to\.have\.status\((\d+)\)/g,
        replacement: 'expect(res.getStatus()).to.equal($1)'
      },
      // Response body JSON access
      {
        pattern: /pm\.response\.json\(\)/g,
        replacement: 'res.getBody()'
      },
      // Environment variable operations
      {
        pattern: /pm\.environment\.set\s*\(\s*["'`]([^"'`]+)["'`]\s*,\s*([^)]+)\)/g,
        replacement: 'bru.setEnvVar("$1", $2)'
      },
      {
        pattern: /pm\.environment\.get\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
        replacement: 'bru.getEnvVar("$1")'
      },
      // Global variable operations
      {
        pattern: /pm\.globals\.set\s*\(\s*["'`]([^"'`]+)["'`]\s*,\s*([^)]+)\)/g,
        replacement: 'bru.setVar("$1", $2)'
      },
      {
        pattern: /pm\.globals\.get\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
        replacement: 'bru.getVar("$1")'
      },
      // Collection variable operations
      {
        pattern: /pm\.collectionVariables\.set\s*\(\s*["'`]([^"'`]+)["'`]\s*,\s*([^)]+)\)/g,
        replacement: 'bru.setVar("$1", $2)'
      },
      {
        pattern: /pm\.collectionVariables\.get\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
        replacement: 'bru.getVar("$1")'
      },
      // Response time assertions
      {
        pattern: /pm\.expect\s*\(\s*pm\.response\.responseTime\s*\)\.to\.be\.below\s*\(\s*(\d+)\s*\)/g,
        replacement: 'expect(res.getResponseTime()).to.be.below($1)'
      },
      // Response header assertions
      {
        pattern: /pm\.response\.to\.have\.header\s*\(\s*["'`]([^"'`]+)["'`]\s*\)/g,
        replacement: 'expect(res.getHeader("$1")).to.exist'
      },
      // Response body text
      {
        pattern: /pm\.response\.text\(\)/g,
        replacement: 'res.getBody()'
      },
      // Basic expect conversions
      {
        pattern: /pm\.expect\s*\(\s*([^)]+)\s*\)\.to\.eql\s*\(\s*([^)]+)\s*\)/g,
        replacement: 'expect($1).to.equal($2)'
      },
      {
        pattern: /pm\.expect\s*\(\s*([^)]+)\s*\)\.to\.equal\s*\(\s*([^)]+)\s*\)/g,
        replacement: 'expect($1).to.equal($2)'
      },
      // Response size
      {
        pattern: /pm\.response\.responseSize/g,
        replacement: 'res.getSize()'
      }
    ];

    // Apply all conversions
    conversions.forEach(({ pattern, replacement }) => {
      translatedScript = translatedScript.replace(pattern, replacement);
    });

    return translatedScript;
  } catch (error) {
    console.error('Translation error:', error);
    return script;
  }
};

export const TranslatorSimple = () => {
  const [pmCode, setPmCode] = useState('// translate your awesome code');
  const [translatedCode, setTranslatedCode] = useState('');

  useEffect(() => {
    const output = postmanTranslation(pmCode);
    setTranslatedCode(output);
  }, [pmCode]);

  const copyClipboard = () => {
    navigator.clipboard.writeText(translatedCode).then(() => {
      alert('Copied to clipboard!');
    });
  };

  return (
    <div style={{ width: '100%', marginTop: '1rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>Postman to Bruno Script Translator</h3>
        <button
          onClick={copyClipboard}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          Copy Bruno Code
        </button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Postman Script
          </label>
          <textarea
            value={pmCode}
            onChange={(e) => setPmCode(e.target.value)}
            style={{
              width: '100%',
              height: '400px',
              padding: '0.75rem',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              border: '1px solid #D1D5DB',
              borderRadius: '0.375rem',
              resize: 'vertical'
            }}
            placeholder="Paste your Postman script here..."
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Bruno Script
          </label>
          <textarea
            value={translatedCode}
            readOnly
            style={{
              width: '100%',
              height: '400px',
              padding: '0.75rem',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              border: '1px solid #D1D5DB',
              borderRadius: '0.375rem',
              backgroundColor: '#F9FAFB',
              resize: 'vertical'
            }}
            placeholder="Translated Bruno script will appear here..."
          />
        </div>
      </div>
    </div>
  );
};


