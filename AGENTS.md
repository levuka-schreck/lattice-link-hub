<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Use TanStack leaf routes for the home page and individual service pages, sharing navigation, contact, and footer components to keep the experience consistent.
- Keep service positioning in a browser-safe shared data module so detail pages present a consistent content structure.
- Until a verified contact destination is supplied, the inquiry form only downloads a local brief and explicitly states that it does not send data.
- Bundle website and product imagery as local asset imports so deployment does not depend on a hosting-specific asset pointer.
- Apply the enterprise visual system through shared global semantic tokens and shared site components so every leaf page inherits the same presentation.
- Keep Soteria's product narrative in a dedicated browser-safe module and render diagrams as responsive semantic HTML; this keeps technical explanations accessible and independent of the source presentation.
