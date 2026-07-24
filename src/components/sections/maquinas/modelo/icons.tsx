// Ícones inline (extraídos dos SVGs estáticos em public/assets/maquinas e
// public/assets/shared) — inline para poderem receber a cor da linha em
// runtime via prop, o que um <Image src="..."/> apontando pra um arquivo
// estático não permite.

// currentColor (sem prop de cor) para herdar a cor do texto do elemento pai
// via CSS — inclusive em estados como :hover, sem precisar de JS.
export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" width={10} height={10} fill="none" className={className} aria-hidden="true">
      <path d="M5 5.72973L1.16667 2L0 3.13514L5 8L10 3.13514L8.83333 2L5 5.72973Z" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 11.2 8.83675" width={9} height={9} fill="none" aria-hidden="true">
      <path
        d="M0.6 3.81838C0.268629 3.81838 0 4.08701 0 4.41838C0 4.74975 0.268629 5.01838 0.6 5.01838V4.41838V3.81838ZM11.0243 4.84264C11.2586 4.60833 11.2586 4.22843 11.0243 3.99411L7.20589 0.175736C6.97157 -0.0585785 6.59167 -0.0585785 6.35736 0.175736C6.12304 0.410051 6.12304 0.78995 6.35736 1.02426L9.75147 4.41838L6.35736 7.81249C6.12304 8.0468 6.12304 8.4267 6.35736 8.66102C6.59167 8.89533 6.97157 8.89533 7.20589 8.66102L11.0243 4.84264ZM0.6 4.41838V5.01838H10.6V4.41838V3.81838H0.6V4.41838Z"
        fill={color}
      />
    </svg>
  );
}

export function PesoIcon({ color }: { color: string }) {
  return (
    <svg width={40} height={40} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.58475 40.5H35.4153C38.2235 40.5 40.5 38.2235 40.5 35.4153C40.5 34.9298 40.4319 34.4603 40.3049 34.0156L33.5253 10.9647C32.9174 8.83712 30.9584 7.27966 28.6356 7.27966H12.3644C10.0416 7.27966 8.08263 8.83712 7.47475 10.9647L0.695085 34.0156C0.568051 34.4603 0.5 34.9298 0.5 35.4153C0.5 38.2235 2.77653 40.5 5.58475 40.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 7.27966C22.3722 7.27966 23.8898 5.76198 23.8898 3.88983C23.8898 2.01768 22.3722 0.5 20.5 0.5C18.6278 0.5 17.1102 2.01768 17.1102 3.88983C17.1102 5.76198 18.6278 7.27966 20.5 7.27966Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TieBarIcon({ color }: { color: string }) {
  return (
    <svg width={40} height={40} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M28.6356 40.5H3.88983C2.01771 40.5 0.5 38.9824 0.5 37.1102V34.7373C0.5 32.8651 2.01771 31.3475 3.88983 31.3475H37.1102C38.9823 31.3475 40.5 32.8651 40.5 34.7373V37.1102C40.5 38.9824 38.9823 40.5 37.1102 40.5M21.4322 0.500002V9.65254M25.2458 31.3475V40.5M31.0085 15.9237V25.0763M2.95763 1.17797L11.0932 9.31356M11.6864 0.5L20.3729 9.18644M3 32.2161L10.7542 39.9703M11.9619 31.6441L20.5 40.1822M21.4004 31.6441L25.0816 35.3253M2.8517 16.6229L10.4788 24.25M11.7712 16.1356L20.0975 24.4619M21.3051 16.1356L29.4407 24.2712M37.1102 9.65254H3.88983C2.01771 9.65254 0.500002 8.13492 0.500002 6.26271V3.88983C0.500002 2.01763 2.01771 0.500001 3.88983 0.500001H37.1102C38.9823 0.500001 40.5 2.01763 40.5 3.88983V6.26271C40.5 8.13492 38.9823 9.65254 37.1102 9.65254ZM37.1102 25.0763H3.88983C2.01771 25.0763 0.500002 23.5586 0.500002 21.6864V19.3136C0.500002 17.4414 2.01771 15.9237 3.88983 15.9237H37.1102C38.9823 15.9237 40.5 17.4414 40.5 19.3136V21.6864C40.5 23.5586 38.9823 25.0763 37.1102 25.0763Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PrecisaoIcon({ color }: { color: string }) {
  return (
    <svg width={40} height={40} viewBox="0 0 41.5 41.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.2604 40.5959V35.7708H23.2396V40.5959M23.2396 0.904098V5.72924H18.2604V0.904098M20.75 5.72925V35.7707M40.5959 23.2396H35.7707V18.2604H40.5959M0.904099 18.2604H5.72924V23.2396H0.904099M5.72925 20.75H35.7707M27.7939 23.2396C27.0438 25.3618 25.3618 27.0438 23.2396 27.7939M18.2604 27.7939C16.1382 27.0438 14.4562 25.3618 13.7061 23.2396M13.7061 18.2604C14.4562 16.1382 16.1382 14.4562 18.2604 13.7061M23.2396 13.7061C25.3618 14.4562 27.0438 16.1382 27.7939 18.2604M40.75 20.75C40.75 31.7498 31.7498 40.75 20.75 40.75C9.75016 40.75 0.75 31.7498 0.75 20.75C0.75 9.75016 9.75016 0.75 20.75 0.75C31.7498 0.75 40.75 9.75016 40.75 20.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Suporte247Icon({ color }: { color: string }) {
  return (
    <svg width={36} height={40} viewBox="0 0 36.3548 41.5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.75 18.1774C0.75 8.55249 8.55249 0.75 18.1774 0.75C27.8022 0.75 35.6048 8.55249 35.6048 18.1774M0.75 18.1774V30.7085H8.21888V18.1774L0.75 18.1774ZM35.6048 18.1774L28.1359 18.1774V30.7085H35.6048V18.1774ZM23.1566 38.2604H33.1151V30.7085M23.1566 40.75H15.6878V35.7707H23.1566V40.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="22.9256"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
