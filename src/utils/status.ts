export function statusName(status: string): string {
  switch (status) {
    case 'pending':
      return 'Pendente';
    case 'active':
      return 'Activo';
    case 'blocked':
      return 'Bloqueado';
    default:
      return status;
  }
}
