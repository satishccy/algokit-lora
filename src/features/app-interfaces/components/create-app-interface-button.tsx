import { Button } from '@/features/common/components/button'
import { Dialog, DialogContent, DialogHeader, MediumSizeDialogBody } from '@/features/common/components/dialog'
import { useToggle } from '@/features/common/hooks/use-toggle'
import { useCallback } from 'react'
import { CreateAppInterfaceDialogBody } from '@/features/app-interfaces/components/create-app-interface-dialog-body'
import { createAppInterfaceLabel } from '@/features/app-interfaces/components/labels'

type Props = {
  onSuccess: () => void
}

export function CreateAppInterfaceButton({ onSuccess: _onSuccess }: Props) {
  const { on, off, state: dialogOpen } = useToggle(false)

  const onSuccess = useCallback(() => {
    off()
    _onSuccess()
  }, [off, _onSuccess])

  return (
    <div className="flex justify-end">
      <Button variant="outline-secondary" onClick={on}>
        Create
      </Button>
      <Dialog open={dialogOpen} onOpenChange={(open) => (open ? on() : off())} modal={true}>
        <DialogContent className="bg-card">
          <DialogHeader className="flex-row items-center space-y-0">
            <h2 className="pb-0">{createAppInterfaceLabel}</h2>
          </DialogHeader>
          <MediumSizeDialogBody>
            <CreateAppInterfaceDialogBody onSuccess={onSuccess} />
          </MediumSizeDialogBody>
        </DialogContent>
      </Dialog>
    </div>
  )
}
