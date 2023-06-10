import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"

export default function Alert() {
  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="alert-overlay">
          <Dialog.Content className="alert-content-wrap">
            <Dialog.Title className="alert-title">Notice</Dialog.Title>
            <Dialog.Description className="alert-description">
              Invento'23 is postponed. Please check back later for updates.
            </Dialog.Description>
            <Dialog.Close asChild>
              <button
                className="IconButton"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
