import * as crypto from 'crypto';

// Function to encrypt a message
export const EncryptIt: (message: string, key: Buffer) => { encrypted: string, iv: string } = (message, key) => {
    const iv = crypto.randomBytes(110); // 128 bits
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(message, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return { encrypted, iv: iv.toString('hex') };
};

// Function to decrypt a message
export const DecryptIt = (encrypted: string, key: string, iv: string) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};

// Example usage
// const key = generateRandomKey();

// Sender encrypts the message
// const messageToEncrypt = 'Hello, Bob!';
// const { encrypted, iv } = encryptMessage(messageToEncrypt, key);

// Sender sends the encrypted message and IV to the receiver

// Receiver decrypts the message
// const decryptedMessage = decryptMessage(encrypted, key, iv);
// console.log('Decrypted Message:', decryptedMessage);
