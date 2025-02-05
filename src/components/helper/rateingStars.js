const ActiveIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.09784 1.8541C5.69654 0.0114779 8.30336 0.0114794 8.90206 1.8541L9.02058 2.21885C9.28833 3.04289 10.0562 3.60081 10.9227 3.60081H11.3062C13.2437 3.60081 14.0492 6.08004 12.4818 7.21885L12.1715 7.44427C11.4705 7.95356 11.1772 8.85629 11.445 9.68034L11.5635 10.0451C12.1622 11.8877 10.0532 13.42 8.48579 12.2812L8.17552 12.0557C7.47455 11.5464 6.52536 11.5464 5.82438 12.0557L5.51411 12.2812C3.94668 13.42 1.83772 11.8877 2.43643 10.0451L2.55494 9.68034C2.82269 8.85629 2.52937 7.95356 1.8284 7.44427L1.51812 7.21885C-0.0493038 6.08004 0.756248 3.60081 2.69369 3.60081H3.07721C3.94367 3.60081 4.71158 3.04289 4.97933 2.21885L5.09784 1.8541Z"
      fill="#8B4AA3"
    />
  </svg>
);

const DisableIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.09784 1.8541C5.69654 0.0114779 8.30336 0.0114794 8.90206 1.8541L9.02058 2.21885C9.28833 3.04289 10.0562 3.60081 10.9227 3.60081H11.3062C13.2437 3.60081 14.0492 6.08004 12.4818 7.21885L12.1715 7.44427C11.4705 7.95356 11.1772 8.85629 11.445 9.68034L11.5635 10.0451C12.1622 11.8877 10.0532 13.42 8.48579 12.2812L8.17552 12.0557C7.47455 11.5464 6.52536 11.5464 5.82438 12.0557L5.51411 12.2812C3.94668 13.42 1.83772 11.8877 2.43643 10.0451L2.55494 9.68034C2.82269 8.85629 2.52937 7.95356 1.8284 7.44427L1.51812 7.21885C-0.0493038 6.08004 0.756248 3.60081 2.69369 3.60081H3.07721C3.94367 3.60081 4.71158 3.04289 4.97933 2.21885L5.09784 1.8541Z"
      fill="#E4A4FB"
    />
  </svg>
);
export const renderStars = (rate) => {
  const totalStars = 5; // Total number of stars
  const activeStars = Math.floor(rate); // Number of active stars
  const hasHalfStar = rate % 1 !== 0; // Check if there's a half star

  const stars = [];

  // Add active stars
  for (let i = 0; i < activeStars; i++) {
    stars.push(<ActiveIcon key={`active-${i}`} />);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(
      <div
        key="half-star"
        style={{ position: "relative", display: "inline-block" }}
      >
        <DisableIcon />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            overflow: "hidden",
          }}
        >
          <ActiveIcon />
        </div>
      </div>
    );
  }

  // Add disabled stars
  const remainingStars = totalStars - activeStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<DisableIcon key={`disabled-${i}`} />);
  }

  return stars;
};
