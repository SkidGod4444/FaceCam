export const initStream = async (): Promise<void> => {
    const callerStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const videoElement = document.getElementById("callerStream") as HTMLVideoElement | null;
    if (videoElement) {
        videoElement.srcObject = callerStream;
    } else {
        console.error('No element with id "callerStream" found');
    }
};