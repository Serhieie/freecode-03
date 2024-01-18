import styled from "@emotion/styled";
import { VerticalSliderContainerProps, VolumeInputProps } from "./VolumeBar.types";

export const VerticalSliderContainer = styled.div<VerticalSliderContainerProps>`
  display: flex;
  height: 48px;
  transform: rotate(270deg);
  align-self: center;
  margin-top: 50px;
  position: relative;
  margin-left: auto;
  margin-right: 14px;

  .volumeUp {
    color: #a0a6af;
    right: 0;
    bottom: 2px;
    position: absolute;
    transform: rotate(90deg);
    @media (max-width: 768px) {
      bottom: -6px;
      transform: rotate(0deg);
    }
  }
  .volumeDown {
    color: #a0a6af;
    bottom: 2px;
    position: absolute;
    transform: rotate(90deg);

    @media (max-width: 768px) {
      bottom: -6px;
      transform: rotate(0deg);
    }
  }

  @media (max-width: 768px) {
    transform: rotate(0deg);
    margin: 0;
    margin-top: 14px;
  }
`;

export const VolumeInput = styled.input<VolumeInputProps>`
  -webkit-appearance: none;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  background-color: #1e293b;
  outline: none;
  color: #475569;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 10px;

  width: 80px;
  height: 4px;

  &::-webkit-slider-thumb {
    height: 20px;
    width: 10px;
    border-radius: 2px;
    background: #475569;
    cursor: pointer;
    -webkit-appearance: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 190px;
    height: 8px;
  }
`;
