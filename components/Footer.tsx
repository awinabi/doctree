interface FooterProps {
    children?: React.ReactElement
}

export default function Footer({ children } : FooterProps) {
    return (
        <footer>
        <a
          href="https://apibanking.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="btn-link text-primary">APIBanking</span>
        </a>
      </footer>
    )

}
