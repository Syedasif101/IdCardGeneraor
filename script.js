// Function to display uploaded image
function displayImage() {
  const file = document.getElementById('student-picture').files[0];
  const preview = document.getElementById('preview');

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };

    reader.readAsDataURL(file);
  }
}

// Function to generate the ID card
function generateCard() {
  const name = document.getElementById('name').value;
  const college = document.getElementById('college').value;
  const location = document.getElementById('location').value;
  const previewSrc = document.getElementById('preview').src;

  document.getElementById('collect_name').textContent = `Name: ${name}`;
  document.getElementById(
    'collect_college'
  ).textContent = `College: ${college}`;
  document.getElementById(
    'collect_location'
  ).textContent = `Location: ${location}`;
  document.getElementById('img').src = previewSrc;
}
