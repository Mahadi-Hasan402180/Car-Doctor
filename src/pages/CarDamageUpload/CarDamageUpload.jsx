import { useState } from "react";


const CarDamageUpload = () => {
  const [image, setImage] = useState(null);
  const [damageInfo, setDamageInfo] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert('Please upload an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    // Upload image to server or API for processing
    const response = await fetch('/api/upload-damage-image', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    setDamageInfo(result); // Assuming the result contains damage assessment info
  };

  return (
    <div>
      <h2>Upload Car Damage Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button type="submit">Upload</button>
      </form>

      {damageInfo && (
        <div>
          <h3>Damage Assessment</h3>
          <p>{damageInfo.message}</p>
        </div>
      )}
    </div>
  );
};

export default CarDamageUpload;
