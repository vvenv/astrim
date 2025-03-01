export default function ThemeSwitcher() {
  const handleClick = () => {
    localStorage.setItem(
      'theme',
      document.documentElement.classList.toggle('dark') ? 'dark' : 'light',
    )
  }

  return (
    <button
      className="relative h-6 w-6 p-0 text-default/50 hover:text-default/75"
      type="button"
      id="theme-switcher"
      title="Toggle dark theme"
      onClick={handleClick}
    >
      <i className="i-astrim-sun absolute inset-0 size-6 opacity-100 transition-opacity dark:opacity-0"></i>
      <i className="i-astrim-moon absolute inset-0 size-6 opacity-0 transition-opacity dark:opacity-100"></i>
    </button>
  )
}
