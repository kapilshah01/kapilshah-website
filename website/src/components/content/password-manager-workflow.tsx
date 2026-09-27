const steps = [
  { title: "Unlock your vault", text: "Use a unique master passphrase and the manager account’s MFA." },
  { title: "Retrieve one account", text: "Choose the saved login for the business service you intended to open." },
  { title: "Use a unique password", text: "The manager fills or copies that service’s separate credential." },
  { title: "Sign in to the service", text: "Check the website address before allowing autofill or submitting." },
];

export function PasswordManagerWorkflow() {
  return (
    <figure className="my-8 rounded-xl border border-border bg-surface-muted p-5 sm:p-6">
      <figcaption className="mb-5 text-sm font-semibold text-foreground">A safer sign-in flow</figcaption>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="relative rounded-lg border border-border bg-background p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Step {index + 1}</p>
            <h3 className="mt-2 font-semibold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
            {index < steps.length - 1 ? <span className="sr-only">Then</span> : null}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">The vault protects access to saved credentials; it does not make a fake sign-in page trustworthy. Pause if the address or request is unexpected.</p>
    </figure>
  );
}
