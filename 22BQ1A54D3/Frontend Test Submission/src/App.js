import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Log } from '../../LoggingMiddleware/loggingMiddleware';

function App() {
  const [url, setUrl] = useState('');
  const handleSubmit = async () => {
    await Log("frontend", "info", "UI", `User submitted URL: ${url}`, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyZWRkZW1nYXlhdGhyaXJlZGR5MkBnbWFpbC5jb20iLCJleHAiOjE3NTQwMjkwMTEsImlhdCI6MTc1NDAyODExMSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImVhNjVlMjI5LTg4MzEtNDA0Yy05OTdjLTIzOTdjOTllYzY3MSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJlZGRlbSBnYXlhdGhyaSByZWRkeSIsInN1YiI6IjhjZWI2MTllLTdjYTktNGIxMy05YjU0LTIxMjdkOWIwZTMwNCJ9LCJlbWFpbCI6InJlZGRlbWdheWF0aHJpcmVkZHkyQGdtYWlsLmNvbSIsIm5hbWUiOiJyZWRkZW0gZ2F5YXRocmkgcmVkZHkiLCJyb2xsTm8iOiIyMmJxMWE1NGQzIiwiYWNjZXNzQ29kZSI6IlBuVkJGViIsImNsaWVudElEIjoiOGNlYjYxOWUtN2NhOS00YjEzLTliNTQtMjEyN2Q5YjBlMzA0IiwiY2xpZW50U2VjcmV0IjoiZGt3UXhBdUpDZndnY211ZCJ9.ELRWSzDdGOCEVXOqG_UgblhaALyMuHMQIxUxwZPSYro");
    alert('URL submitted');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>URL Shortener</Typography>
      <TextField label="Enter URL" fullWidth margin="normal" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Container>
  );
}

export default App;
