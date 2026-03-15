import React from 'react';
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardsGrid,
  ProfileCard,
  CardHeader,
  PlatformLogo,
  PlatformInfo,
  PlatformName,
  PlatformHandle,
  MetricsGrid,
  MetricBox,
  MetricValue,
  MetricLabel,
  DifficultyBar,
  DifficultyRow,
  DiffLabel,
  DiffTrack,
  DiffFill,
  DiffCount,
  Divider,
  BadgeRow,
  Badge,
} from './CodingStyles';

const leetcodeData = {
  platform: 'leetcode',
  name: 'LeetCode',
  handle: '@soham_mandaviya',
  url: 'https://leetcode.com/u/soham_mandaviya/',
  emoji: '🧩',
  totalSolved: 350,
  contestRating: 1524,
  ranking: '~180K',
  easy: { solved: 130, total: 800 },
  medium: { solved: 185, total: 1700 },
  hard: { solved: 35, total: 500 },
  badges: ['50 Days Badge', 'SQL 50', 'Top Interview 150', 'Dynamic Programming'],
  badgeColors: ['#FFA116', '#00B8A3', '#5752D1', '#F97316'],
};

const gfgData = {
  platform: 'gfg',
  name: 'GeeksforGeeks',
  handle: '@202001142',
  url: 'https://www.geeksforgeeks.org/user/202001142/',
  emoji: '🌿',
  totalSolved: 220,
  score: 1840,
  easy: { solved: 80 },
  medium: { solved: 110 },
  hard: { solved: 30 },
  badges: ['Problem Solver', '200+ Problems', 'Consistent Coder', 'DSA Expert'],
  badgeColors: ['#2DD36F', '#4FC3F7', '#FF7043', '#AB47BC'],
};

const LeetCodeCard = () => {
  return (
    <ProfileCard
      href={leetcodeData.url}
      target="_blank"
      rel="noopener noreferrer"
      $platform="leetcode"
    >
      <CardHeader>
        <PlatformLogo $platform="leetcode">{leetcodeData.emoji}</PlatformLogo>
        <PlatformInfo>
          <PlatformName>{leetcodeData.name}</PlatformName>
          <PlatformHandle $platform="leetcode">{leetcodeData.handle}</PlatformHandle>
        </PlatformInfo>
      </CardHeader>

      <MetricsGrid>
        <MetricBox>
          <MetricValue $color="#FFA116">{leetcodeData.totalSolved}+</MetricValue>
          <MetricLabel>Solved</MetricLabel>
        </MetricBox>
        <MetricBox>
          <MetricValue $color="#a78bfa">{leetcodeData.contestRating}</MetricValue>
          <MetricLabel>Contest Rating</MetricLabel>
        </MetricBox>
        <MetricBox>
          <MetricValue $color="#60a5fa" style={{ fontSize: '18px' }}>{leetcodeData.ranking}</MetricValue>
          <MetricLabel>Global Rank</MetricLabel>
        </MetricBox>
      </MetricsGrid>

      <DifficultyBar>
        <DifficultyRow>
          <DiffLabel $color="#2DD36F">Easy</DiffLabel>
          <DiffTrack>
            <DiffFill $color="#2DD36F" $pct={Math.round((leetcodeData.easy.solved / leetcodeData.easy.total) * 100)} />
          </DiffTrack>
          <DiffCount>{leetcodeData.easy.solved}</DiffCount>
        </DifficultyRow>
        <DifficultyRow>
          <DiffLabel $color="#FFA116">Med</DiffLabel>
          <DiffTrack>
            <DiffFill $color="#FFA116" $pct={Math.round((leetcodeData.medium.solved / leetcodeData.medium.total) * 100)} />
          </DiffTrack>
          <DiffCount>{leetcodeData.medium.solved}</DiffCount>
        </DifficultyRow>
        <DifficultyRow>
          <DiffLabel $color="#EF4444">Hard</DiffLabel>
          <DiffTrack>
            <DiffFill $color="#EF4444" $pct={Math.round((leetcodeData.hard.solved / leetcodeData.hard.total) * 100)} />
          </DiffTrack>
          <DiffCount>{leetcodeData.hard.solved}</DiffCount>
        </DifficultyRow>
      </DifficultyBar>

      <Divider />

      <BadgeRow>
        {leetcodeData.badges.map((badge, i) => (
          <Badge
            key={badge}
            $color={leetcodeData.badgeColors[i % leetcodeData.badgeColors.length]}
            $bg={leetcodeData.badgeColors[i % leetcodeData.badgeColors.length] + '18'}
          >
            🏅 {badge}
          </Badge>
        ))}
      </BadgeRow>
    </ProfileCard>
  );
};

const GFGCard = () => {
  const total = gfgData.easy.solved + gfgData.medium.solved + gfgData.hard.solved;
  return (
    <ProfileCard
      href={gfgData.url}
      target="_blank"
      rel="noopener noreferrer"
      $platform="gfg"
    >
      <CardHeader>
        <PlatformLogo $platform="gfg">{gfgData.emoji}</PlatformLogo>
        <PlatformInfo>
          <PlatformName>{gfgData.name}</PlatformName>
          <PlatformHandle $platform="gfg">{gfgData.handle}</PlatformHandle>
        </PlatformInfo>
      </CardHeader>

      <MetricsGrid>
        <MetricBox>
          <MetricValue $color="#2DD36F">{gfgData.totalSolved}+</MetricValue>
          <MetricLabel>Solved</MetricLabel>
        </MetricBox>
        <MetricBox>
          <MetricValue $color="#f59e0b">{gfgData.score}</MetricValue>
          <MetricLabel>Score</MetricLabel>
        </MetricBox>
        <MetricBox>
          <MetricValue $color="#60a5fa" style={{ fontSize: '15px' }}>#12</MetricValue>
          <MetricLabel>Inst. Rank</MetricLabel>
        </MetricBox>
      </MetricsGrid>

      <DifficultyBar>
        <DifficultyRow>
          <DiffLabel $color="#2DD36F">Easy</DiffLabel>
          <DiffTrack>
            <DiffFill $color="#2DD36F" $pct={Math.round((gfgData.easy.solved / total) * 100)} />
          </DiffTrack>
          <DiffCount>{gfgData.easy.solved}</DiffCount>
        </DifficultyRow>
        <DifficultyRow>
          <DiffLabel $color="#FFA116">Med</DiffLabel>
          <DiffTrack>
            <DiffFill $color="#FFA116" $pct={Math.round((gfgData.medium.solved / total) * 100)} />
          </DiffTrack>
          <DiffCount>{gfgData.medium.solved}</DiffCount>
        </DifficultyRow>
        <DifficultyRow>
          <DiffLabel $color="#EF4444">Hard</DiffLabel>
          <DiffTrack>
            <DiffFill $color="#EF4444" $pct={Math.round((gfgData.hard.solved / total) * 100)} />
          </DiffTrack>
          <DiffCount>{gfgData.hard.solved}</DiffCount>
        </DifficultyRow>
      </DifficultyBar>

      <Divider />

      <BadgeRow>
        {gfgData.badges.map((badge, i) => (
          <Badge
            key={badge}
            $color={gfgData.badgeColors[i % gfgData.badgeColors.length]}
            $bg={gfgData.badgeColors[i % gfgData.badgeColors.length] + '18'}
          >
            🏆 {badge}
          </Badge>
        ))}
      </BadgeRow>
    </ProfileCard>
  );
};

const CodingProfiles = () => (
  <Container id="coding-profiles">
    <Wrapper>
      <Title>Coding Profiles</Title>
      <Desc>Sharpening problem-solving skills, one challenge at a time</Desc>
      <CardsGrid>
        <LeetCodeCard />
        <GFGCard />
      </CardsGrid>
    </Wrapper>
  </Container>
);

export default CodingProfiles;