import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BsFileEarmarkPlus, BsTrash } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
import { IoSaveOutline } from 'react-icons/io5'
import { NoteType } from '@renderer/types/NoteStore'
import Modal from '@/components/Modal'
import useSideNav from './SideNav.controller'

export default function SideNav() {
  const {
    notes,
    activeNote,
    isModalClosed,
    openModal,
    saveNote,
    handleCreateNote,
    handleDeleteNote,
    handleSelectNote,
    closeModal,
  } = useSideNav()

  return (
    <>
      <div className="w-[250px] shrink-0 flex-col transition-all duration-300 ease-in-out lg:w-[300px]">
        <aside className="fixed inset-y-0 left-0 z-40 m-0 flex w-[250px] shrink-0 flex-col border-r border-r-neutral-200 bg-white transition-all duration-300 ease-in-out lg:w-[300px]">
          <div className="mt-11 flex items-center justify-between px-8 py-3 pt-2">
            <div className="mr-5 flex items-center">
              <div className="mr-5">
                <div className="relative inline-block shrink-0 cursor-pointer rounded-[.95rem]">
                  <img
                    className="inline-block h-[40px] w-[40px] shrink-0 rounded-[.95rem]"
                    src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
                    alt="avatar image"
                  />
                </div>
              </div>
              <div className="mr-2">
                <a
                  href="#"
                  className="text-secondary-inverse text-[1.075rem] font-medium transition-colors duration-200 ease-in-out hover:text-primary dark:text-neutral-400/90 dark:hover:text-primary"
                >
                  Robert Jason
                </a>
                <span className="text-secondary-dark block text-[0.85rem] font-medium dark:text-stone-500">
                  SEO Manager
                </span>
              </div>
            </div>

            <span
              onClick={openModal}
              className="flex h-10 cursor-pointer items-center rounded border border-primary bg-secondary px-2 text-center text-primary hover:bg-primary/15"
            >
              <BsFileEarmarkPlus className="text-2xl font-bold" />
            </span>
          </div>

          <div className="hidden border-b border-primary lg:block dark:border-neutral-700/70"></div>

          <div className="relative my-5 overflow-y-auto pl-2 pr-2">
            <h2 key={notes[0]?.id} className="mb-4 text-text-secondary-dark">
              {notes.length} Notes Created
            </h2>

            <div className="flex w-full flex-col font-medium">
              {/* <!-- menu item --> */}
              {notes.length === 0 && (
                <div className="my-[.4rem] mt-4 flex flex-col items-center justify-center gap-6 rounded border bg-secondary/50 px-2 py-5 text-center">
                  <h2>No New Notes</h2>
                  <span
                    onClick={openModal}
                    className="flex cursor-pointer items-center rounded border border-primary bg-secondary p-2 text-center text-primary"
                  >
                    <GoPlus />
                  </span>
                </div>
              )}
              {notes.map((note: NoteType) => (
                <div
                  key={note.id}
                  title={note.title}
                  className={`my-[.4rem] flex items-center gap-3 rounded border bg-secondary/50 px-2 py-[.775rem] hover:border-primary/50 ${note.id === activeNote?.id && 'border-2 border-primary'}`}
                  onClick={() => handleSelectNote(note)}
                >
                  <NavLink to="/" className="flex w-11/12 cursor-pointer items-center">
                    <div className="">
                      <p className="ellipsis h-5 font-medium">{note.title}</p>
                      <small>{note.date}</small>
                    </div>
                  </NavLink>
                  <IoSaveOutline
                    onClick={() => saveNote(note)}
                    className="h-9 w-10 cursor-pointer rounded border border-green-500 bg-green-500/25 px-2 text-[2.5rem] font-bold text-green-500"
                  />
                  <BsTrash
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteNote(note)
                    }}
                    className="h-9 w-10 cursor-pointer rounded border border-red-500 bg-red-500/25 px-2 text-[2.5rem] font-bold text-red-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/*//** <-- Modal --> */}
      <Modal isModalClosed={isModalClosed} closeModal={closeModal}>
        <TitleForm handleCreateNote={handleCreateNote} closeModal={closeModal} />
      </Modal>
    </>
  )
}

// ****** ADD A TITLE FORM ******* //
export function TitleForm({
  handleCreateNote,
  closeModal,
}: {
  handleCreateNote: (t: string) => void
  closeModal: () => void
}) {
  const [title, setTitle] = useState('')

  return (
    <div
      onClick={closeModal}
      className="flex min-h-screen -translate-y-1/4 flex-col items-center justify-center"
    >
      <form
        autoComplete="on"
        className="w-full max-w-[600px] rounded-lg bg-white p-10 shadow"
        aria-label="add-a-title"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault()
          handleCreateNote(title || 'Untitled')
          closeModal()
        }}
      >
        <h2 className="mb-10 text-center text-3xl font-bold text-black">Add A Title</h2>
        <div className="mb-5 flex flex-col items-start gap-y-3">
          <label htmlFor="title" className="cursor-pointer font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full rounded-lg border border-gray-200 bg-transparent p-3 outline-none"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title For This Memo"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md !bg-primary px-10 py-3 font-semibold text-white"
        >
          Enter
        </button>
      </form>
    </div>
  )
}
