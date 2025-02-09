import React, { useState, useEffect } from 'react';

const  GeneDetectArea = () => {
  const [geneticData, setGeneticData] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneticDataChange = (event) => {
    setGeneticData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform data validation and preprocessing
    const processedData = geneticData.replace(/\s/g, ''); // Remove whitespace

    setIsLoading(true);

    // Simulate asynchronous result generation
    setTimeout(() => {
      // Check if all values are divisible by two
      const values = processedData.split(',');
      const allDivisibleByTwo = values.every((value) => parseInt(value) % 2 === 0);

      // Set the result based on the divisibility check
      setResult(allDivisibleByTwo ? 'Gene detected!' : 'No gene detected.');

      setIsLoading(false);
    }, 2000);

    // Reset input field
    setGeneticData('');
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.cursor = 'wait';
    } else {
      document.body.style.cursor = 'default';
    }
  }, [isLoading]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Genetic Data Input</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="geneticData">Genetic Data:</label>
                  <textarea
                    className="form-control"
                    id="geneticData"
                    value={geneticData}
                    onChange={handleGeneticDataChange}
                    rows={5}
                    placeholder="Enter genetic data (comma-separated values)"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  {isLoading ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" /> : null}
                  {isLoading ? 'Please Wait...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>

          {result && (
            <div className="card mt-4">
              <div className={`card-body ${result === 'Gene detected!' ? 'text-white' : 'text-white'}`}>
                <h5 className="mb-0">{result}</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneDetectArea;
