import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Button } from '../button'
import { Modal } from './modal'
import { ModalFooter } from './modal-footer'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/ui/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const onOpenChange = (open: boolean) => {
  console.log('open change handler ' + open)
}
//
// const ServiceModalComponent = ({
//   withCloseBtn = true,
//   withFooter = false,
//   withOverflow = false,
// }) => {
//   const [isOpen, setIsOpen] = useState(false)
//
//   return (
//     <>
//       <Button onClick={() => setIsOpen(true)}>Trigger</Button>
//       {isOpen && (
//         <Modal
//           closeHandler={setIsOpen}
//           open={isOpen}
//           title={'Test Modal'}
//           withCloseBtn={withCloseBtn}
//         >
//           <div>hello world!</div>
//           {withOverflow && (
//             <div>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//               mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//               veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//               consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
//               dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
//               in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
//               consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
//               magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
//               ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//               voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//               cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
//               laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//               exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//               dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//               mollit anim id est laborum.
//             </div>
//           )}
//           {withFooter && (
//             <ModalFooter>
//               <Button onClick={() => setIsOpen(false)} variant={'secondary'}>
//                 Secondary
//               </Button>
//               <Button onClick={() => setIsOpen(false)} variant={'primary'}>
//                 Primary
//               </Button>
//             </ModalFooter>
//           )}
//         </Modal>
//       )}
//     </>
//   )
// }

//
// export const Primary: Story = {
//   render: () => <ServiceModalComponent />,
// }
//
// export const WithFooter: Story = {
//   render: () => <ServiceModalComponent withFooter />,
// }
//
// export const WithoutCloseBtnWithFooter: Story = {
//   render: () => <ServiceModalComponent withCloseBtn={false} withFooter />,
// }
//
// export const Overflow: Story = {
//   render: () => <ServiceModalComponent withOverflow />,
// }
export const Header: Story = {
  args: {
    children: <Button variant={'primary'}>Edit profile</Button>,
    title: 'Pri mary Modal',
    trigger: <Button variant={'primary'}>Add New Deck</Button>,
  },
}

export const ContainerWithHugeText: Story = {
  args: {
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    ),
    title: 'Primary Modal',
    trigger: <Button variant={'primary'}>Add New Deck</Button>,
  },
}

export const WithFooter: Story = {
  args: {
    children: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    ),
    footer: {
      buttonPrimary: <Button variant={'primary'}>Button Primary</Button>,
      buttonSecondary: <Button variant={'secondary'}>Button Secondary</Button>,
    },
    onOpenChange: open => onOpenChange(open),
    trigger: <Button variant={'primary'}>Add New Deck</Button>,
  },
}
