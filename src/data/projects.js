export const projects = [
    {
        id: 'smart-farming',
        title: 'Smart Farming Assistant Chatbot',
        category: 'AI & IoT',
        image: '/images/format_chatbot/farm.jpg',
        shortDescription: 'AI-powered agricultural assistant for crop management and weather alerts.',
        fullDescription: `
            <h3>Overview</h3>
            <p>An intelligent chatbot system designed to assist farmers with real-time agricultural data and decision-making support.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Weather Integration:</strong> Real-time weather updates and forecasts via API.</li>
                <li><strong>Crop Management:</strong> Personalized crop recommendations based on soil and season.</li>
                <li><strong>Irrigation Alerts:</strong> Smart scheduling for water management.</li>
                <li><strong>Disease Detection:</strong> Early warning system for potential crop diseases.</li>
            </ul>

            <h3>Technical Stack</h3>
            <p>Python (Flask/Django), NLP (NLTK/Spacy), OpenWeatherMap API, SQLite/PostgreSQL.</p>
        `
    },
    {
        id: 'lemura-ai',
        title: 'Lemura AI Platform',
        category: 'AI/ML',
        image: '/images/asu_project/asu1.png',
        gallery: [
            '/images/asu_project/asu1.png',
            '/images/asu_project/asu2.png',
            '/images/asu_project/asu3.png',
            '/images/asu_project/asu4.png'
        ],
        shortDescription: 'Advanced AI platform for secure data processing and student project development.',
        fullDescription: `
            <h3>Overview</h3>
            <p>A comprehensive AI platform designed to simplify complex machine learning tasks for students and researchers.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Secure Auth:</strong> Multi-layer authentication for data privacy.</li>
                <li><strong>Model Training:</strong> Easy-to-use interface for training ML models.</li>
                <li><strong>Data Visualization:</strong> Interactive charts and graphs for dataset analysis.</li>
                <li><strong>Cloud Integration:</strong> Seamless deployment capabilities.</li>
            </ul>

            <h3>Technical Stack</h3>
            <p>React, Node.js, Python, TensorFlow/PyTorch, MongoDB.</p>
        `
    },
    {
        id: 'neuro-sight',
        title: 'Neuro Sight Diagnosis',
        category: 'Healthcare AI',
        image: '/images/brain desorder project/n1.png',
        gallery: [
            '/images/brain desorder project/n1.png',
            '/images/brain desorder project/n2.png',
            '/images/brain desorder project/n3.png',
            '/images/brain desorder project/n4.png',
            '/images/brain desorder project/n5.png',
            '/images/brain desorder project/n6.png'
        ],
        shortDescription: 'AI system for early detection of brain disorders using medical imaging.',
        fullDescription: `
            <h3>Overview</h3>
            <p>A groundbreaking medical diagnostic tool that uses Deep Learning to analyze MRI/CT scans for early signs of neurological disorders.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Multi-Disease Detection:</strong> Alzheimer's, Dementia, MS, and Stroke detection.</li>
                <li><strong>DICOM Support:</strong> Native handling of medical image formats.</li>
                <li><strong>Doctor Portal:</strong> Secure interface for medical professionals to review reports.</li>
                <li><strong>Automated Reporting:</strong> Instant generation of detailed diagnostic reports.</li>
            </ul>

            <h3>Technical Stack</h3>
            <p>Python, CNN (Convolutional Neural Networks), OpenCV, SQLite, React Frontend.</p>
        `
    },
    {
        id: 'dyslexia-app',
        title: 'Dyslexia Learning Platform',
        category: 'EdTech',
        image: '/images/dyslexia support app/dyslex.png',
        shortDescription: 'Accessible web application designed to help dyslexic learners.',
        fullDescription: `
            <h3>Overview</h3>
            <p>An inclusive educational platform providing specialized tools to support students with dyslexia in reading and writing.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Custom Reader:</strong> Adjustable fonts (OpenDyslexic), spacing, and color overlays.</li>
                <li><strong>Text-to-Speech:</strong> High-quality voice synthesis for reading assistance.</li>
                <li><strong>Gamified Learning:</strong> Memory and pattern recognition games.</li>
                <li><strong>Document Editor:</strong> Built-in editor with real-time accessibility checks.</li>
            </ul>

            <h3>Technical Stack</h3>
            <p>React, Web Speech API, Firebase, Tailwind CSS.</p>
        `,
        link: 'https://hemachandaranzz.github.io/dyslexia-support-app/',
        linkLabel: 'View Project'
    },
    {
        id: 'medtech-bot',
        title: 'MedTech Troubleshoot Assistant',
        category: 'Healthcare IoT',
        image: '/images/MedTech Troubleshoot Assistant/troubleshoot.png',
        link: 'https://hemodialysis-kdkysnytru7roy3lolpkem.streamlit.app/',
        shortDescription: 'AI chatbot for diagnosing and fixing medical equipment issues.',
        fullDescription: `
            <h3>Overview</h3>
            <p>A specialized support system for biomedical engineers to quickly diagnose and repair medical equipment.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li><strong>Error Code Lookup:</strong> Instant database search for equipment error codes.</li>
                <li><strong>Maintenance Guides:</strong> Step-by-step repair tutorials and manuals.</li>
                <li><strong>Part Identification:</strong> Image recognition for identifying spare parts.</li>
                <li><strong>Safety Protocols:</strong> Compliance checklists for medical devices.</li>
            </ul>

            <h3>Technical Stack</h3>
            <p>Python, Dialogflow/Rasa, React Native, PostgreSQL.</p>
        `,
        linkLabel: 'View Project'
    },
    {
        id: 'biosort',
        title: 'BioSort',
        category: 'AI & IoT',
        image: '/images/biosort/waste classi.jpg',
        link: '/biosort.html',
        shortDescription: 'AI-Driven Biomedical Waste Segregation System.',
        fullDescription: ''
    },
    {
        id: 'ecobot',
        title: 'ECOBOT',
        category: 'AI/ML',
        image: '/images/ecobot/roboticarm1.png',
        link: '/ecobot.html',
        shortDescription: 'AI Vision-Based Robotic Arm for Stroke Patients.',
        fullDescription: ''
    },
    {
        id: 'medifix',
        title: 'MediFix',
        category: 'Healthcare IoT',
        image: '/images/med_iot/mediot.png',
        link: '/medifix.html',
        shortDescription: 'AI-Powered Biomedical Equipment Troubleshooting & Maintenance.',
        fullDescription: ''
    },
    {
        id: 'prosthetic-hand',
        title: 'Two Gripper Prosthetic Hand',
        category: 'Healthcare IoT',
        image: '/images/prosthetichand/twojawproject1.png',
        link: '/prosthetichand.html',
        shortDescription: 'Empowering transradial amputees with accessible prosthetic solutions.',
        fullDescription: ''
    },
    {
        id: 'jeevitham',
        title: 'Jeevitham',
        category: 'Healthcare AI',
        image: '/images/jeevitham/jeevitham_logo.png',
        link: 'https://jeevitham.vercel.app/',
        shortDescription: 'Hospital database management system for postnatal care.',
        fullDescription: ''
    }
]
