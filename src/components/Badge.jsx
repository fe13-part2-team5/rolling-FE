import * as B from "./Badge.style";

const badgeStyles = {
  known: {
    backgroundColor: "beige",
    fontColor: "beige",
    label: "지인",
  },
  colleague: {
    backgroundColor: "purple",
    fontColor: "purple",
    label: "동료",
  },
  family: {
    backgroundColor: "green",
    fontColor: "green",
    label: "가족",
  },
  friend: {
    backgroundColor: "blue",
    fontColor: "blue",
    label: "친구",
  },
};

function RelBadge({ value = Object.keys(badgeStyles)[0] }) {
  const selectedStyle = badgeStyles[value];

  return (
    <B.Container
      bgColor={selectedStyle.backgroundColor}
      fontColor={selectedStyle.fontColor}
    >
      <B.Label>{selectedStyle.label}</B.Label>
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
