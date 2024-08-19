import { Button } from '@/features/common/components/button'
import { Dialog, DialogContent, DialogHeader, MediumSizeDialogBody } from '@/features/common/components/dialog'
import { useToggle } from '@/features/common/hooks/use-toggle'
import { NewContractForm } from '@/features/app-studio/components/new-contract-form'
import { useCallback, useState } from 'react'
import { AlgoAppSpec as Arc32AppSpec } from '@/features/abi-methods/data/types/arc-32/application'
import { UploadAppSpecForm } from '@/features/app-studio/components/upload-app-spec-form'

export function NewContractButton() {
  const { on, off, state: dialogOpen } = useToggle(false)

  return (
    <div className="absolute bottom-0 right-0">
      <Button variant="outline-secondary" onClick={on}>
        Upload App Spec
      </Button>
      <Dialog open={dialogOpen} onOpenChange={(open) => (open ? on() : off())} modal={true}>
        {dialogOpen && (
          <DialogContent className="bg-card">
            <DialogHeader className="flex-row items-center space-y-0">
              <h2 className="pb-0">New contract</h2>
            </DialogHeader>
            <MediumSizeDialogBody>
              <NewContractDialogBody />
            </MediumSizeDialogBody>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

function NewContractDialogBody() {
  const [appSpecFile, setAppSpecFile] = useState<File | undefined>()
  const [appSpec, setAppSpec] = useState<Arc32AppSpec | undefined>()

  const onFileSelected = useCallback((file: File, appSpec: Arc32AppSpec) => {
    setAppSpecFile(file)
    setAppSpec(appSpec)
  }, [])

  return !appSpec || !appSpecFile ? (
    <UploadAppSpecForm onFileSelected={onFileSelected} />
  ) : (
    <NewContractForm appSpec={appSpec} appSpecFile={appSpecFile} onSuccess={() => console.log('success')} />
  )
}
