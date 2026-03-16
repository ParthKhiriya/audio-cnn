# Audio CNN & Visualization Dashboard 🎧🧠

An end-to-end deep learning project for audio classification, featuring a custom Convolutional Neural Network (CNN) built from scratch with PyTorch and a modern web dashboard for real-time inference and visualization. 

This system classifies environmental sounds (from the ESC-50 dataset) by converting raw audio waveforms into Mel Spectrograms, which are then processed by a ResNet-style architecture. The backend is deployed as a serverless API on [Modal](https://modal.com/) with GPU acceleration (A10G), while the frontend is a responsive Next.js application that visualizes the model's predictions, input spectrograms, and internal feature maps.

## 🌟 Features

### Deep Learning Model (PyTorch)
- **Custom ResNet Architecture:** Built with residual blocks for deep feature extraction.
- **Audio Preprocessing:** Converts raw waveforms to Mel Spectrograms on the fly.
- **Advanced Data Augmentation:** Utilizes Mixup, Frequency Masking, and Time Masking to prevent overfitting.
- **Optimized Training Pipeline:** Leverages AdamW optimizer, OneCycleLR scheduler, and Label Smoothing.
- **TensorBoard Integration:** For comprehensive training metrics and analysis.

### Serverless Backend (Modal & FastAPI)
- **Serverless GPU Inference:** Deployed on Modal using A10G GPUs for blazing-fast predictions.
- **Persistent Volumes:** Seamlessly handles model checkpoint saving and loading.
- **Robust API:** Built with FastAPI and validated using Pydantic.

### Interactive Dashboard (Next.js & React)
- **Visual Insights:** Real-time visualization of audio waveforms and generated Mel Spectrograms.
- **"Under the Hood" Feature Maps:** Extracts and displays the intermediate feature maps of the CNN layers to show what the model actually "sees".
- **Modern UI/UX:** Styled with Tailwind CSS and Shadcn UI components.
- **Client-Side File Handling:** Native Base64 encoding for efficient and uncorrupted data transfer.

---

## 🚀 Setup & Installation

### Prerequisites
- Python 3.10+
- Node.js 18+
- A free [Modal](https://modal.com/) account for serverless GPU deployment.

### 1. Clone the Repository
```bash
git clone https://github.com/ParthKhiriya/audio-cnn.git
cd audio-cnn
```

### 2. Backend Setup (PyTorch & Modal)
First, set up a Python virtual environment to keep dependencies clean:

**Windows:**
```powershell
python -m venv .venv
.venv\Scripts\activate
```
**Mac/Linux:**
```bash
python3 -m venv .venv
source .venv/bin/activate
```

Next, install the required Python packages and authenticate with Modal:
```bash
pip install -r requirements.txt
modal setup
```

**(Optional) Train the Model:**
If you want to train the model from scratch, run the training script. Modal will automatically download the ESC-50 dataset, train the network on an A10G GPU, and save the best checkpoint (`best_model.pth`) to a persistent cloud volume.
```bash
modal run train.py
```

**Deploy the Inference API:**
Deploy the FastAPI backend to Modal. This will give you a live HTTPS endpoint for the frontend to consume.
```bash
modal deploy main.py
```
*Note: Make sure to copy the deployment URL provided in the terminal if you need to update the frontend fetch request!*

### 3. Frontend Setup (Next.js)
Open a new terminal window and navigate to the frontend directory:

```bash
cd audio-cnn-visualisation
```

Install the Node dependencies:
```bash
npm install
```

*(Optional Configuration)*: If you deployed your own backend on Modal, open `src/app/page.tsx`, locate the `fetch` request inside the `handleFileChange` function, and replace the URL with your unique Modal deployment URL.

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Upload any `.wav` file to see the model in action!

---

## 📁 Repository Structure
- `model.py`: Defines the PyTorch CNN and Residual Block architectures.
- `train.py`: Handles dataset downloading, preprocessing, training loops, and validation.
- `main.py`: The Modal-powered FastAPI server that handles inference and feature map extraction.
- `audio-cnn-visualisation/`: The Next.js frontend application.

## 📄 License
This project is open-source and available under the MIT License.
