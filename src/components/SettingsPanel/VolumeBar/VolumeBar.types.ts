export interface VolumeInputProps {
  type: "range";
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface VerticalSliderContainerProps {
  color: string;
  volume: number;
}

export interface VolumeBarProps {
  isTurnedOn: boolean;
  volume: number;
  color: string;
}
