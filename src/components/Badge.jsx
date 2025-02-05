import * as B from "./Badge.style";

const badgeStyles = {
  지인: {
    backgroundColor: "beige",
    fontColor: "beige",
  },
  동료: {
    backgroundColor: "purple",
    fontColor: "purple",
  },
  가족: {
    backgroundColor: "green",
    fontColor: "green",
  },
  친구: {
    backgroundColor: "blue",
    fontColor: "blue",
  },
};

function RelBadge({ value = Object.keys(badgeStyles)[0] }) {
  const selectedStyle = badgeStyles[value];

  return (
    <B.Container
      bgColor={selectedStyle.backgroundColor}
      fontColor={selectedStyle.fontColor}
    >
      <B.Label>{value}</B.Label>
    </B.Container>
  );
}

function EmojiBadge({ emoji = "😍", count = 0 }) {
  return (
    <B.EmojiBadgeContainer>
      <B.Emoji>{emoji}</B.Emoji>
      <B.Likes>{count}</B.Likes>
    </B.EmojiBadgeContainer>
  );
}

export { RelBadge, EmojiBadge };
