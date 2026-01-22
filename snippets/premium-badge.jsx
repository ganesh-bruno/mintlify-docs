export const PremiumBadge = ({ noLink }) => {
  const badge = (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.125rem 0.5rem',
        fontSize: '0.75rem',
        fontWeight: '600',
        borderRadius: '9999px',
        backgroundColor: '#FEF3C7',
        color: '#92400E',
        marginLeft: '0.5rem'
      }}
    >
      PREMIUM
    </span>
  );

  if (noLink) {
    return badge;
  }

  return (
    <a
      href="https://www.usebruno.com/pricing"
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      {badge}
    </a>
  );
};

export default PremiumBadge;


