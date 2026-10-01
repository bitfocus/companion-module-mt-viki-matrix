Module for the MT-Viki HDMI matrix series.

Tested on the MT-HD0808 8x8 matrix.

Version 2.0.0 requires Companion 4.3 or later; use module 1.x with older Companion versions.
Action fields support Companion's expression toggle.
For example, set Input to Output's Input Port to expression mode and enter
`$(custom:videoRouting).boothMonitor.source.port`. The result must be a valid port
number for the configured matrix size. Scene expressions must resolve to a scene
number from 1 to 16. Existing dropdown selections continue to work.
