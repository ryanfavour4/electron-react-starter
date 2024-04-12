export default function CustomWindowTitleBar() {
  const minimizeWindow = (): void => window.electron.ipcRenderer.send('minimize-window');
  const maximizeWindow = (): void => window.electron.ipcRenderer.send('maximize-window');
  const closeWindow = (): void => window.electron.ipcRenderer.send('close-window');

  return (
    <>
      <div className="h-9" />

      <header className="draggable absolute inset-0 z-50 flex h-9 w-full items-center border border-gray-400 bg-gradient-to-b from-[#ebebeb] to-[#d5d5d5] text-gray-700">
        <div className="flex w-full justify-between px-4">
          <div className="group flex items-center gap-3">
            <button
              onClick={closeWindow}
              className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e33e41] bg-[#ff5c5c] text-base font-light text-[#ff5c5c] active:bg-[#c14645] active:text-[#4e0002] group-hover:text-[#820005]"
            >
              <p className="!m-0 !p-0">⨯</p>
            </button>

            <button
              onClick={minimizeWindow}
              className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e09e3e] bg-[#ffbd4c] text-base font-light text-[#ffbd4c] active:bg-[#c08e38] active:text-[#5a2607] group-hover:text-[#9a5518]"
            >
              <p className="!m-0 !p-0">−</p>
            </button>

            <button
              onClick={maximizeWindow}
              className="flex h-5 w-5 items-center justify-center rounded-full border border-[#14ae46] bg-[#00ca56] text-base font-light text-[#00ca56] active:bg-[#029740] active:text-[#003107] group-hover:text-[#006519]"
            >
              <p className="!m-0 !p-0">+</p>
            </button>
          </div>

          <div className="flex-[.5] font-medium text-[#4d494d]">
            <h1>{'Note Memo'}</h1>
          </div>
        </div>
      </header>
    </>
  )
}
