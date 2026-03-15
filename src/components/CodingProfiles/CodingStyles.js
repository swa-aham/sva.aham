import styled, { keyframes } from 'styled-components';

export const pulseGlowLeetcode = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 161, 22, 0.2); }
  50% { box-shadow: 0 0 40px rgba(255, 161, 22, 0.5); }
`;

export const pulseGlowGFG = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(45, 211, 111, 0.2); }
  50% { box-shadow: 0 0 40px rgba(45, 211, 111, 0.5); }
`;

export const floatUp = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
`;

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const barGrow = keyframes`
  from { width: 0; }
  to { width: var(--target-width); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 20px 100px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: 32px;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
    max-width: 580px;
  }
`;

export const ProfileCard = styled.a`
  background: ${({ theme }) => theme.card};
  border-radius: 24px;
  padding: 32px;
  text-decoration: none;
  display: block;
  border: 1px solid ${({ $platform }) =>
    $platform === 'leetcode' ? 'rgba(255, 161, 22, 0.25)' : 'rgba(45, 211, 111, 0.25)'};
  animation: ${({ $platform }) =>
    $platform === 'leetcode' ? pulseGlowLeetcode : pulseGlowGFG} 3s ease-in-out infinite;
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ $platform }) =>
      $platform === 'leetcode' ? 'rgba(255, 161, 22, 0.6)' : 'rgba(45, 211, 111, 0.6)'};
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
`;

export const PlatformLogo = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $platform }) =>
    $platform === 'leetcode'
      ? 'linear-gradient(135deg, #FFA116 0%, #B8860B 100%)'
      : 'linear-gradient(135deg, #2DD36F 0%, #1a7a40 100%)'};
  font-size: 24px;
  animation: ${floatUp} 4s ease-in-out infinite;
  flex-shrink: 0;
`;

export const PlatformInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PlatformName = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

export const PlatformHandle = styled.div`
  font-size: 14px;
  color: ${({ $platform }) =>
    $platform === 'leetcode' ? '#FFA116' : '#2DD36F'};
  font-weight: 500;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`;

export const MetricBox = styled.div`
  background: ${({ theme }) => theme.bg};
  border-radius: 14px;
  padding: 16px 12px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.text_secondary + '20'};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.04);
  }
`;

export const MetricValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${({ $color }) => $color || '#fff'};
  margin-bottom: 4px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const MetricLabel = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.text_secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

export const DifficultyBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DifficultyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DiffLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ $color }) => $color};
  width: 44px;
  flex-shrink: 0;
`;

export const DiffTrack = styled.div`
  flex: 1;
  height: 7px;
  background: ${({ theme }) => theme.text_secondary + '20'};
  border-radius: 4px;
  overflow: hidden;
`;

export const DiffFill = styled.div`
  height: 100%;
  border-radius: 4px;
  background: ${({ $color }) => $color};
  width: ${({ $pct }) => $pct}%;
  transition: width 1.2s ease;
`;

export const DiffCount = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  width: 28px;
  text-align: right;
  flex-shrink: 0;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.text_secondary + '20'};
  margin: 20px 0;
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Badge = styled.div`
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-size: 11px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid ${({ $color }) => $color + '40'};
  letter-spacing: 0.3px;
`;