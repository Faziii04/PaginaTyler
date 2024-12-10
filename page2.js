function filterCardsByRole() {
  const selectedRole = document.getElementById("roleSelect").value;
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardRole = card.getAttribute("data-role");
    if (selectedRole === "" || cardRole === selectedRole) {
      card.style.display = "block";
      card.style.visibility = "visible";
    } else {
      card.style.display = "none";
      card.style.visibility = "hidden";
    }
  });
}

function showVideo(videoId) {
  const videos = document.querySelectorAll(".video-container video");
  videos.forEach((video) => {
    video.style.display = "none";
  });
  document.getElementById(videoId).style.display = "block";
}
