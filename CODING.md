# Some coding advice for this Blog

### Import Next with prefix

Just as a rough guideline, import the NextJS components with a `Next` prefix, e.g. `NextLink`instead of the generic way the suggest in the documentation. Reduces errors with standard html components and other react packages. Also gives a clear indication on what comes from Next.

### Create a NextJS Link including Chakra UI
The following snippet generates a NextJS link that uses the ChakraUi styling. You need to import `next/link`as `NextLink`for this to work. The magic attribute here is `passHref`.

````
<NextLink href="/" passHref>
    <Link color="primary">Titel des Links</Link>
</NextLink>
````