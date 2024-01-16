export const SettingsPanel = () => {
  return (
    <>
      <div class="controls-container">
        <div class="control">
          <p>Power</p>
          <div class="select">
            <div class="inner" style={{ float: "left" }}></div>
          </div>
        </div>
        <p id="display">&nbsp;</p>
        <div class="volume-slider">
          <input max="1" min="0" step="0.01" type="range" value="0.3" />
        </div>
        <div class="control">
          <p>Bank</p>
          <div class="select">
            <div class="inner" style={{ float: "left" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};
