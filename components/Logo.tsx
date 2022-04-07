import React from 'react'

type LogoProps = {
  className: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <img
      className={className}
      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzk3cHgiIGhlaWdodD0iMTAxcHgiIHZpZXdCb3g9IjAgMCAzOTcgMTAxIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA2My4xICg5MjQ1MikgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+R3JvdXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iUGFnZS00IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iRXF1aXRpc2VfU3R5bGVndWlkZV92MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC00MTUuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk3LjA5MDQwMCwgNDE1LjI3NTUwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0NC42NzY5LDQ1LjkyNzYgQzE0NC4wOTk5LDQwLjcyOTYgMTQwLjU2MTksMzYuNjg2NiAxMzQuODU4OSwzNi42ODY2IEMxMjkuMzcyOSwzNi42ODY2IDEyNS40NzQ5LDM5Ljg2MjYgMTI0LjY4MDksNDUuOTI3NiBMMTQ0LjY3NjksNDUuOTI3NiBaIE0xMjQuMzkxOSw1Mi4yMDg2IEMxMjQuOTY4OSw1OC40MTY2IDEyOS4xNTU5LDYyLjg5MTYgMTM1LjI5MjksNjIuODkxNiBDMTM5LjYyMzksNjIuODkxNiAxNDIuMjk0OSw2MS4wODg2IDE0My45NTU5LDU4LjE5OTYgTDE1Mi44MzU5LDU4LjE5OTYgQzE1MC41MjQ5LDY1LjEzMTYgMTQ0LjI0MzksNzAuMTgzNiAxMzUuMDc1OSw3MC4xODM2IEMxMjMuMjM2OSw3MC4xODM2IDExNS41ODM5LDYxLjgxMDYgMTE1LjU4MzksNDkuOTY5NiBDMTE1LjU4MzksMzguNDIwNiAxMjMuMzgwOSwyOS44Mjg2IDEzNC45MzE5LDI5LjgyODYgQzE0Ni45ODY5LDI5LjgyODYgMTUzLjQ4MzksMzguODUzNiAxNTMuNDgzOSw0OS44OTg2IEMxNTMuNDgzOSw1MS4yNjk2IDE1My40MTI5LDUyLjA2NDYgMTUzLjQxMjksNTIuMjgxNiBMMTI0LjM5MTksNTIuMjA4NiBaIiBpZD0iRmlsbC05OCIgZmlsbD0iI0Y2RjdGNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2Ni44Mzk2LDQ5LjgyNiBDMTY2LjgzOTYsNTcuMTE4IDE3MC43Mzc2LDYyLjY3NSAxNzcuMzc5Niw2Mi42NzUgQzE4My43MzI2LDYyLjY3NSAxODguMjgwNiw1Ny40MDcgMTg4LjI4MDYsNTAuMTE1IEMxODguMjgwNiw0Mi42MDggMTg0LjMwOTYsMzcuMTIxIDE3Ny4zNzk2LDM3LjEyMSBDMTcwLjczNzYsMzcuMTIxIDE2Ni44Mzk2LDQyLjYwOCAxNjYuODM5Niw0OS44MjYgTDE2Ni44Mzk2LDQ5LjgyNiBaIE0xOTYuNjU0NiwzMS4xMjggTDE5Ni42NTQ2LDgyLjAyMyBMMTg3Ljg0NzYsODIuMDIzIEwxODcuODQ3Niw3MS4zMzkgQzE4Ny44NDc2LDY4LjgxMyAxODcuODQ3Niw2Ni41NzUgMTg3LjkyMDYsNjMuOTA0IEMxODUuODI2Niw2Ny4wMDcgMTgxLjM1MDYsNjkuODk2IDE3NS41MDI2LDY5Ljg5NiBDMTY0LjY3NDYsNjkuODk2IDE1Ny44MTU2LDYxLjQ0OSAxNTcuODE1Niw0OS45NyBDMTU3LjgxNTYsMzguMTMxIDE2NC45NjI2LDI5LjkwMSAxNzUuMzU4NiwyOS45MDEgQzE4MS45OTk2LDI5LjkwMSAxODYuMjU4NiwzMi45MzQgMTg4LjM1MzYsMzYuMTgzIEwxODguMzUzNiwzMS4xMjggTDE5Ni42NTQ2LDMxLjEyOCBaIiBpZD0iRmlsbC0xMDAiIGZpbGw9IiNGNkY3RjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMjkuNzE4Miw2Ni4zNTg2IEwyMjkuNzE4Miw2My42MTQ2IEMyMjcuNDc5Miw2Ny41ODQ2IDIyMy42NTMyLDcwLjA0MDYgMjE3Ljk1MDIsNzAuMDQwNiBDMjA5LjM2MDIsNzAuMDQwNiAyMDQuMjMzMiw2NC45ODY2IDIwNC4yMzMyLDUzLjUwNzYgTDIwNC4yMzMyLDMxLjEyODYgTDIxMy4wNDEyLDMxLjEyODYgTDIxMy4wNDEyLDUxLjM0MjYgQzIxMy4wNDEyLDU4LjA1NjYgMjE0Ljc3MzIsNjIuNzQ4NiAyMjAuODM4Miw2Mi43NDg2IEMyMjcuNjk1Miw2Mi43NDg2IDIyOS4yMTIyLDU2LjkwMTYgMjI5LjIxMjIsNTAuOTgwNiBMMjI5LjIxMjIsMzEuMTI4NiBMMjM4LjAxOTIsMzEuMTI4NiBMMjM4LjAxOTIsNjMuMzI1NiBDMjM4LjAxOTIsNjUuMjc1NiAyMzguMDE5Miw2Ny4yMjM2IDIzOC4wOTIyLDY5LjAyOTYgTDIyOS43MTgyLDY5LjAyOTYgTDIyOS43MTgyLDY2LjM1ODYgWiIgaWQ9IkZpbGwtMTAyIiBmaWxsPSIjRjZGN0Y0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iI0Y2RjdGNCIgcG9pbnRzPSIyNDcuNDA1NiA2OS4wMjg1IDI1Ni4yMTI2IDY5LjAyODUgMjU2LjIxMjYgMzEuMTI3NSAyNDcuNDA1NiAzMS4xMjc1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iI0Y2RjdGNCIgcG9pbnRzPSIyNDcuMjU5NiAyNS42NDE1IDI1Ni4yODM2IDI1LjY0MTUgMjU2LjI4MzYgMTcuNDExNSAyNDcuMjU5NiAxNy40MTE1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjc2LjIwODQsMzEuMTI4NCBMMjgzLjI4MjQsMzEuMTI4NCBMMjgzLjI4MjQsMzcuNjk3NCBMMjc2LjIwODQsMzcuNjk3NCBMMjc2LjIwODQsNTguNDE2NCBDMjc2LjIwODQsNjEuOTU1NCAyNzcuODY3NCw2My4xMDg0IDI4MC43NTY0LDYzLjEwODQgQzI4MS40Nzc0LDYzLjEwODQgMjgyLjA1NjQsNjMuMDM3NCAyODIuNTYxNCw2Mi45NjQ0IEwyODIuNTYxNCw2OS40NjI0IEMyODEuNzY3NCw2OS42Nzk0IDI4MC44Mjk0LDY5Ljc1MDQgMjc5LjE2NzQsNjkuNzUwNCBDMjcyLjAyMjQsNjkuNzUwNCAyNjcuNDAxNCw2Ny40NDA0IDI2Ny40MDE0LDU5LjkzMzQgTDI2Ny40MDE0LDM3LjY5NzQgTDI2MS42OTg0LDM3LjY5NzQgTDI2MS42OTg0LDMxLjEyODQgTDI2Ny40MDE0LDMxLjEyODQgTDI2Ny40MDE0LDIwLjg3NzQgTDI3Ni4yMDg0LDIwLjg3NzQgTDI3Ni4yMDg0LDMxLjEyODQgWiIgaWQ9IkZpbGwtMTA2IiBmaWxsPSIjRjZGN0Y0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iI0Y2RjdGNCIgcG9pbnRzPSIyODkuNDkwNiA2OS4wMjg1IDI5OC4yOTc2IDY5LjAyODUgMjk4LjI5NzYgMzEuMTI3NSAyODkuNDkwNiAzMS4xMjc1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aCIgZmlsbD0iI0Y2RjdGNCIgcG9pbnRzPSIyODkuMzQ1NiAyNS42NDE1IDI5OC4zNjk2IDI1LjY0MTUgMjk4LjM2OTYgMTcuNDExNSAyODkuMzQ1NiAxNy40MTE1Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzEzLjAyNDgsNTcuMDQ1OSBDMzE0LjEwNzgsNjAuNzk5OSAzMTYuOTIyOCw2My4xMDg5IDMyMS4yNTQ4LDYzLjEwODkgQzMyNS4wMDc4LDYzLjEwODkgMzI3Ljk2NzgsNjEuMzA0OSAzMjcuOTY3OCw1OC40MTY5IEMzMjcuOTY3OCw1NS43NDU5IDMyNS4wODA4LDU1LjAyMzkgMzIxLjI1NDgsNTMuOTM5OSBMMzE3LjA2NjgsNTIuNzg2OSBDMzEwLjkzMDgsNTEuMDUzOSAzMDYuMDIzOCw0OC41OTc5IDMwNi4wMjM4LDQxLjU5NjkgQzMwNi4wMjM4LDM0LjY2NDkgMzEyLjE1NzgsMjkuOTAwOSAzMjAuNjA0OCwyOS45MDA5IEMzMjguNjkwOCwyOS45MDA5IDMzNC45NzA4LDM0LjIzMjkgMzM1LjU0NzgsNDEuNzQwOSBMMzI3Ljc1MTgsNDEuNzQwOSBDMzI2LjY2OTgsMzguNDkxOSAzMjQuMjE0OCwzNi45MDQ5IDMyMC4zODc4LDM2LjkwNDkgQzMxNi40MTY4LDM2LjkwNDkgMzE0LjU0MTgsMzguNzgxOSAzMTQuNTQxOCw0MS4wOTA5IEMzMTQuNTQxOCw0My42MTY5IDMxNi41NjI4LDQ0LjMzODkgMzIwLjM4NzgsNDUuNDIxOSBMMzI0LjU3NDgsNDYuNTA1OSBDMzMyLjM3MjgsNDguNjcwOSAzMzYuMTk3OCw1MS4xOTc5IDMzNi4xOTc4LDU3LjY5NDkgQzMzNi4xOTc4LDY1LjIwMjkgMzI5LjkxNjgsNzAuMTg0OSAzMjEuMTA5OCw3MC4xODQ5IEMzMTEuNjUxOCw3MC4xODQ5IDMwNi4xNjU4LDY1Ljc3OTkgMzA0LjcyMzgsNTcuMDQ1OSBMMzEzLjAyNDgsNTcuMDQ1OSBaIiBpZD0iRmlsbC0xMDkiIGZpbGw9IiNGNkY3RjQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zNjkuODM5Miw0NS45Mjc2IEMzNjkuMjYwMiw0MC43Mjk2IDM2NS43MjQyLDM2LjY4NjYgMzYwLjAyMDIsMzYuNjg2NiBDMzU0LjUzNDIsMzYuNjg2NiAzNTAuNjM1MiwzOS44NjI2IDM0OS44NDIyLDQ1LjkyNzYgTDM2OS44MzkyLDQ1LjkyNzYgWiBNMzQ5LjU1MjIsNTIuMjA4NiBDMzUwLjEzMDIsNTguNDE2NiAzNTQuMzE3Miw2Mi44OTE2IDM2MC40NTMyLDYyLjg5MTYgQzM2NC43ODUyLDYyLjg5MTYgMzY3LjQ1NjIsNjEuMDg4NiAzNjkuMTE2Miw1OC4xOTk2IEwzNzcuOTk2Miw1OC4xOTk2IEMzNzUuNjg2Miw2NS4xMzE2IDM2OS40MDYyLDcwLjE4MzYgMzYwLjIzNzIsNzAuMTgzNiBDMzQ4LjM5ODIsNzAuMTgzNiAzNDAuNzQ1Miw2MS44MTA2IDM0MC43NDUyLDQ5Ljk2OTYgQzM0MC43NDUyLDM4LjQyMDYgMzQ4LjU0MjIsMjkuODI4NiAzNjAuMDkzMiwyOS44Mjg2IEMzNzIuMTQ4MiwyOS44Mjg2IDM3OC42NDYyLDM4Ljg1MzYgMzc4LjY0NjIsNDkuODk4NiBDMzc4LjY0NjIsNTEuMjY5NiAzNzguNTczMiw1Mi4wNjQ2IDM3OC41NzMyLDUyLjI4MTYgTDM0OS41NTIyLDUyLjIwODYgWiIgaWQ9IkZpbGwtMTExIiBmaWxsPSIjRjZGN0Y0Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzg5LjQ3MjgsMjkuNTk3NSBMMzkwLjMwNjgsMjkuNTk3NSBDMzkxLjExMjgsMjkuNTk3NSAzOTEuNTU0OCwyOS4zNjM1IDM5MS41NTQ4LDI4LjczODUgQzM5MS41NTQ4LDI4LjE0MDUgMzkxLjExMjgsMjcuOTMxNSAzOTAuMzA2OCwyNy45MzE1IEwzODkuNDcyOCwyNy45MzE1IEwzODkuNDcyOCwyOS41OTc1IFogTTM4Ny45MTA4LDI2LjU1MjUgTDM5MC40MDk4LDI2LjU1MjUgQzM5MS4xMzg4LDI2LjU1MjUgMzkxLjczNzgsMjYuNjMwNSAzOTIuMjU3OCwyNi45NDQ1IEMzOTIuODMxOCwyNy4zNTk1IDM5My4xMTc4LDI3LjkzMTUgMzkzLjExNzgsMjguNjYyNSBDMzkzLjExNzgsMjkuODg0NSAzOTIuNDY1OCwzMC40ODM1IDM5MS42NTg4LDMwLjc3MDUgQzM5Mi4yNTc4LDMxLjY4MDUgMzkyLjgzMTgsMzIuNjcwNSAzOTMuMzc3OCwzMy41ODE1IEwzOTEuNTU0OCwzMy41ODE1IEwzOTAuMDE5OCwzMC45Nzc1IEwzODkuNDcyOCwzMC45Nzc1IEwzODkuNDcyOCwzMy41ODE1IEwzODcuOTEwOCwzMy41ODE1IEwzODcuOTEwOCwyNi41NTI1IFogTTM5MC4zMDY4LDI1LjA2ODUgQzM4Ny41NzE4LDI1LjA2ODUgMzg1LjQzNjgsMjcuMjgxNSAzODUuNDM2OCwzMC4wMTU1IEMzODUuNDM2OCwzMi43NDg1IDM4Ny41NzE4LDM0Ljk2MDUgMzkwLjI3OTgsMzQuOTYwNSBDMzkyLjk1OTgsMzQuOTYwNSAzOTUuMTcyOCwzMi43NDg1IDM5NS4xNzI4LDMwLjAxNTUgQzM5NS4xNzI4LDI3LjI4MTUgMzkyLjkzNDgsMjUuMDY4NSAzOTAuMzA2OCwyNS4wNjg1IEwzOTAuMzA2OCwyNS4wNjg1IFogTTM5MC4yNzk4LDM2LjEwNTUgQzM4Ni45NDg4LDM2LjEwNTUgMzg0LjIxNDgsMzMuMzk4NSAzODQuMjE0OCwzMC4wMTU1IEMzODQuMjE0OCwyNi42NTc1IDM4Ni44Njg4LDIzLjkyMzUgMzkwLjMwNjgsMjMuOTIzNSBDMzkzLjYzODgsMjMuOTIzNSAzOTYuMzcwOCwyNi42NTc1IDM5Ni4zNzA4LDMwLjAxNTUgQzM5Ni4zNzA4LDMzLjM5ODUgMzkzLjY2MjgsMzYuMTA1NSAzOTAuMjc5OCwzNi4xMDU1IEwzOTAuMjc5OCwzNi4xMDU1IFoiIGlkPSJGaWxsLTExMyIgZmlsbD0iI0Y2RjdGNCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTgxLjgyLDE3LjI3OCBMNTYuNzg2LDIuODMxIEM1My41ODgsMC45NzcgNDkuOTI1LC0yLjg0MjE3MDk0ZS0xNCA0Ni4xOTksLTIuODQyMTcwOTRlLTE0IEM0Mi40NzMsLTIuODQyMTcwOTRlLTE0IDM4LjgxOCwwLjk3NyAzNS42MjEsMi44MzEgTDEwLjU3OCwxNy4yNzggQzQuMDQ4LDIxLjA0OSAtMi44NDIxNzA5NGUtMTQsMjguMDcxIC0yLjg0MjE3MDk0ZS0xNCwzNS42MTIgTC0yLjg0MjE3MDk0ZS0xNCw2NC41MzQgQy0yLjg0MjE3MDk0ZS0xNCw3Mi4wNTggNC4wNDgsNzkuMDggMTAuNTc4LDgyLjg1IEwzNS42MjEsOTcuMzE2IEMzOC44MTgsOTkuMTcgNDIuNDgyLDEwMC4xNDYgNDYuMTk5LDEwMC4xNDYgQzQ5LjkxNiwxMDAuMTQ2IDUzLjU3OSw5OS4xNyA1Ni43ODYsOTcuMzE2IEw4MS44Miw4Mi44NSBDODguMTc5LDc5LjE3OCA5Mi4xODMsNzIuNDE2IDkyLjM4LDY1LjEwNyBMOTIuNDA3LDY1LjEwNyBMOTIuNDA3LDM1LjYxMiBDOTIuNDA3LDI4LjA3MSA4OC4zNDksMjEuMDQ5IDgxLjgyLDE3LjI3OCBMODEuODIsMTcuMjc4IFogTTgzLjgxLDYyLjk4NiBMODMuODAxLDYyLjk5NSBDODMuNzc0LDY4LjQ0NyA4MC44MzIsNzMuNTIxIDc2LjExOSw3Ni4yMjggTDUzLjg4MSw4OS4wNzQgQzUxLjU1MSw5MC40MTUgNDguODg5LDkxLjEyNSA0Ni4xOTksOTEuMTI1IEM0My41MDksOTEuMTI1IDQwLjg1NSw5MC40MTUgMzguNTE2LDg5LjA3NCBMMTYuMjc5LDc2LjIyOCBDMTEuNTM4LDczLjUwMiA4LjU5Nyw2OC40MDIgOC41OTcsNjIuOTE1IEw4LjU5NywzNy4yNDEgQzguNTk3LDMxLjc2MiAxMS41MzgsMjYuNjYyIDE2LjI3OSwyMy45MjcgTDM4LjUxNiwxMS4wOSBDNDAuODU1LDkuNzQxIDQzLjUwOSw5LjAyMSA0Ni4xOTksOS4wMjEgQzQ4Ljg4OSw5LjAyMSA1MS41NTEsOS43NDEgNTMuODgxLDExLjA5IEw3Ni4xMTksMjMuOTI3IEM4MC44NTksMjYuNjYyIDgzLjgxLDMxLjc2MiA4My44MSwzNy4yNDEgTDgzLjgxLDYyLjk4NiBaIiBpZD0iRmlsbC0xMTUiIGZpbGw9IiM2MzY0RkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03Mi45NDQzLDQ1Ljk2MjIgQzcxLjUxNTMsMzYuODg3MiA2NS4zMzczLDI4Ljk1MjIgNTYuOTMxMywyNS4yNjQyIEM0Ny45NDczLDIxLjMyMzIgMzcuMDg3MywyMi43OTAyIDI5LjQxMDMsMjguODgxMiBDMjEuOTQ4MywzNC44MDEyIDE4LjEzNDMsNDQuNTcxMiAxOS40NDgzLDUzLjk4ODIgQzIwLjMyMDMsNjAuMjMzMiAyMy40OTgzLDY2LjA1MDIgMjguMTgzMyw3MC4yNTMyIEMzMi4zMTIzLDczLjk1NzIgMzcuNTMzMyw3Ni4zMjkyIDQzLjA0NjMsNzYuOTYxMiBDNTMuMTQ3Myw3OC4xMTgyIDYzLjI1NTMsNzMuMzgyMiA2OC44MjgzLDY0Ljg4NzIgQzY5LjE5OTMsNjQuMzIyMiA2OS41NDkzLDYzLjc0NDIgNjkuODc3Myw2My4xNTMyIEw3MC4xNTUzLDYyLjY0OTIgTDU5LjgwMTMsNjIuNjQ5MiBMNTkuNzAyMyw2Mi42OTQyIEw1OS41NDkzLDYyLjc1NzIgQzU2LjgwNTMsNjUuNjU1MiA1My4xMDczLDY3LjYwMDIgNDkuMTc4Myw2OC4yNzUyIEM0Ni4wMDczLDY4LjgxOTIgNDIuNjg4Myw2OC40NjcyIDM5LjY3NzMsNjcuMzQ2MiBDMzEuOTM5Myw2NC40NjMyIDI2Ljk5ODMsNTYuMzA5MiAyNy44ODAzLDQ4LjExMDIgQzI4Ljg3MDMsMzguOTA1MiAzNi44OTgzLDMxLjYzMjIgNDYuMjAwMywzMS42MzIyIEM1NC41NzAzLDMxLjYzMjIgNjIuMTcwMywzNy42NDgyIDY0LjEyNDMsNDUuNzc1MiBMNDIuNjg2Myw0NS43NzUyIEM0MC4zMTIzLDQ1Ljc3NTIgMzguMzg4Myw0Ny42OTkyIDM4LjM4ODMsNTAuMDczMiBDMzguMzg4Myw1Mi40NDcyIDQwLjMxMjMsNTQuMzcxMiA0Mi42ODYzLDU0LjM3MTIgTDcyLjkxNjMsNTQuMzcxMiBDNzIuOTE2Myw1NC4zNzEyIDcyLjk2NDMsNTQuMDU0MiA3Mi45NjAzLDU0LjA0OTIgQzczLjM2MjMsNTEuMzkyMiA3My4zNjkzLDQ4LjY2MDIgNzIuOTQ0Myw0NS45NjIyIiBpZD0iRmlsbC0xMTciIGZpbGw9IiM2MzY0RkYiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
    />
  )
}