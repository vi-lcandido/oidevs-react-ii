import styled from "styled-components";

export const SectionBody = styled.body``;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  padding: 40px 20px 0;
  width: 100%;
  border: 1px solid yellow;
`;

export const FeedPhoto = styled.div`
  width: 250px;
  height: 250px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
`;
