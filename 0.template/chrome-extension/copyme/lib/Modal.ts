import Swal from 'sweetalert2'
const MySwal = Swal.mixin({
  customClass: {
    popup: 'text-[12px]',
    // title: 'text-sm',
    confirmButton: 'bg-blue-500',
    cancelButton: 'bg-gray-500',
    denyButton: 'bg-red-500',
  },
})
export default MySwal;

export function showSuccess(text: string) {
  MySwal.fire({ text, icon: 'success' });
}

export function showError(text: string) {
  MySwal.fire({ text, icon: 'error' });
}

export function showTip(text: string) {
  MySwal.fire({ text, icon: 'info' });
}
