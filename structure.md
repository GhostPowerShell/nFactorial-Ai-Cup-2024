```
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes/
│   │   │   ├── __init__.py
│   │   │   ├── analysis.py
│   │   └── utils/
│   │       ├── __init__.py
│   │       ├── vulnerability_analyzer.py
│   │
│   ├── tests/
│   │   ├── __init__.py
│   │   ├── test_routes.py
│   │
│   ├── Dockerfile
│   ├── requirements.txt
│   └── run.py
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── CodeEditor.js
│   │   │   ├── VulnerabilityReport.js
│   │   │   └── PatchButton.js
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   └── AnalysisPage.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── webpack.config.js
│   └── .babelrc
│
├── docs/
│   ├── README.md
│   └── API_DOCS.md
│
├── .gitignore
└── docker-compose.yml
```