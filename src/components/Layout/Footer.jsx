import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="mt-4">
    <footer className="bg-[#ffffffdf]">
      <div className=" grid grid-cols-2 md:grid-cols-4 space-x-1 text-gray-700 mx-auto mt-4">
        <div className="mx-4 mt-12">
          <h2 className=" font-bold text-gray-900 flex items-center">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADbAQcDASIAAhEBAxEB/8QAHQAAAgIDAQEBAAAAAAAAAAAAAAMCCAQHCQYFAf/EAEoQAAEDAwIDBQMHCAcGBwAAAAEAAgMEBREGBxIhQQgxUWFxExQiFTJSYoGztCMnM0JydHWxNjdDY2V2ggkWVmaRoiQlc4ShpNL/xAAcAQAABwEBAAAAAAAAAAAAAAAAAQIDBQYHBAj/xAA9EQABAgQCBwUHAgYBBQAAAAABAAIDBAURBjESIUFRYXGBE5GhscEHIiNSctHwNOEUJDIzQrKiJTVi0vH/2gAMAwEAAhEDEQA/AOnqEIQQQhCEEEIQhBBCEIQQQhCEEEIQhBBCFrHcntEbdbce2oqi4/Kt3jy35PoXB7mOHSR/zY+feCeL6pVU9yO0buJuKJqB1cLPaJQWmhoXFoe09JJPnP5d45NP0VOU7D83ULOtos3n0GZ8uKqtaxhTqPdhdpxPlb6nIeJ4K0O5PaV290AJaGkrG367My33SikBYx3hJLza3zA4nDqFWXWPaX3W1ZUvNPfn2OkOQynthMJaPOT9IT/qA8AFqcHoVIHoVfqdh6RkRfR03b3a+4ZDz4rIq1jGq1Ylof2bPlabd5zPlwXsaPdzdGinFRBuHqIuzxflLlNI0nxLXOIPd1C3Bt72wNQ217KHcO3Nu9MTj32lY2KpYPEsGGP+zhPmVXAHCmCpCZpMlOs0IsMcwLHvGtQsjiGqUyJ2kvHdyJuDzBuPVdItG7haO1/Re+6UvtPWhoBkhB4Zov24zhzfXGD0JXolzItl1uVnrYrjaa+ooquA8UU9PKY5GHycOYW/9uu13f7V7K3bg0HyvSjDffaYNjqmDxc3kyT/ALT4kqk1HB0eDd8kdMbjqd9j4clqNE9pcrM2hVRvZu+YXLTzGbfEcQrcIXndG7haO1/Re+6UvtPWhoBkhB4Zov24zhzfXGD0JXolTokJ8FxZEBBGw6itLgR4UzDEWC4OaciDcHqEIQhITqEIQgghCEIIIQhCCCEIQgghCEIIIQhCCCEIQgghCEIIIQhCCCELwW5O9+3m1sDhqO8tkr+HLLbSES1T/D4MgMB8XEBVL3P7Wm4GuPaW7Tbjpm0uy0tpZSaqVv15uRb6MDe8glyl6fRJuoWcwWbvOXTeq5WMUU+j3bEdpP8AlbrPXYOuvgrWbl797d7XtfTXi6e+XQD4bbRYknz9fnwxj9og47gVVHcrtQbh6+dNQ2ypOnrQ/LRS0Uh9q9vhJNycevJvCCO8FaVMr3vL5HlznElzickk9SmNdhXinYflJGz3DTdvPoP/AKeKyysYwqFVvDYezh7m5nmcz4DgnhxJyTnPepgpQOfVSDlYQVUCE0HKkD0KWCpA5SwUw5qYD0KkDhLB6FSB6FOgrnexNBUw5JBwpgpwFc7mr6Fsulxs9bFcrTX1FFVwHijnp5DG9h8Q4cwt/bd9rm/2r2Vu3AoPlelGG++04bHUsHi5vJkn/afElV0DkwFcs7TZWpM0JlgPHaORzXfS63UKJE7SSiFu8Zg8wdR89y6O6N19pHX1B8o6VvUFaxuPaRjLZYj4PYcOb64wehK9AuaFpvF0sddHc7Ncamhq4Tlk1PKY3t9COa3/ALedrm8272Vu3Dt3ynTjDff6VrWVDR4uZyY/7OE+qoVSwbHgXiSR027jqd9j4clrlD9pkpNWhVRvZu+Ya2n1b4jiFbBC+DpHXektd0Pv+lb5TVzAAZGNdiWLyew4c37QvvKmxIT4LiyICCNh1FaZBjwpmGIsFwc05EG4PUIQhCQnUIQhBBCEIQQQhCEEEIQhBBCEIQQQheT3A3V0FthQit1nqKnonPaXQ0wPHUTfsRNy4jPLOMDqQqj7p9tfV+o3TWrbikOnrc7LRWShr62QeI72RfZxOHeHBScjSZqoG8Jtm7zqH79FBVbEchRxaO+7vlGt37dbK2G4m8W3u11KZdW6ghhqS3iioYfytVL4cMY5gH6TsN81Ufc/tka61gJrXouH/dm2Py32sb+Otkb5yd0fowZH0iq91ddWXGrlrrjVzVVTO8vlmmkL5JHHvLnHmT5lQa5XWn4dlZOz4nvu45dB97rLaxjWfqV4cA9kzcMzzd9rdVmy1E1TM+oqZnyyyOL3yPcXOc495JPMlfrXLGa5Na5WIKmHXrTwUxrseiQ1ymCjRLJa7CaDn1WK12PRNa7CUCjIunhymClA59VIOSwU2Qmg5UgehSwVIHKWCmXNTAehUgcJYPQqQPQp0Fc72JoKmHJIOFMFOArnc1PBUw5IDkwFOA3TDmr6Fqu90sddFc7Ncaiiq4TmOenlMb2/aOa3/t52uLzb/ZW7cK3/AClTjDffqVrWVDR4uZyY/wCzhPqq5hykDhcc9TJSps0ZlgPHaORz9FJ0qu1ChxNOSilu8ZtPMHV1z3FdGtJa60lrqh9/0te6euYADIxrsSxeT2HDm/aF95c1bTeLnZK2O5We41FDVwnMc1PIY3t9COa37t72trzbvZW7cK3/AClAMN9+pWtZO0eLmcmv+zhPqqFU8FzEC75I6bdx1O+x8OS12h+06Tm7Qqo3snfMLlp9W+I3lWtQvhaS11pPXND7/pa909cwAF7GuxLF5PYcOb9oX3VS4kJ8F5ZEBBGw6itOgR4UzDEWC4OaciDcHqEIQhITqEIQgghC8JuxvVoTZu0suOrbg41NQ1xo7fTjjqakjv4W9waOrnENHjnANONf9uLdPU0slNo6Gk0tQkkNMTBUVTh9aR44R/pYCPEqTkaRNT40oYs3edQ/fooGrYkp9HOhHdd/yt1nrsHUq7uutyNE7a2v5X1rqGmtsDsiJryXSzEdI425c8+g5dcKo+63bk1BehLadrLc6y0hy03Kra19U8fUZzZH6niPdjhKrBfNRXzVFylvGpLxWXOumPx1FXM6WQ+Ay49w6DuHRYYJBwVb5DDktLWfG993h3bevcs3q+Np2evDlfhM4f1Hrs6d5X07pebrfbhNdb3cqqvrah3FLUVMrpZJD4lziSUgOWOHJjXKxNAAsFSHEuJc7WU8FTBSQ5TBSwUkhOa5Na5Y4Km1yNJWU1yY1yxmuTWuS0SeCmNdj0SGuUwUESyWuwmg59Vitdj0TWuwlAoyLp4cpgpQOfVSDksFNkJoOVIHoUsFSBylgplzUwHoVIHCWD0KkD0KdBXO9iaCphySDhTBTgK53NTwVMOSA5MBTgN0w5qaDhMBB5FJDlIHCcBTRC+jabxdLHXRXG0XCooquE5jngkLHt+0c1v3b7tZ3i3+zt+4Fv8AlKAYb79StayoaPFzOTX/AGcJ9VXUEHkVNriDgrinqXKVNmhMsB3HaORz9FJ0qvVGhRO0kYpbvGbTzB1dc9xXRTSWutJ65off9LXunrmAAvY12JIvJ7DhzftC+6ublru1zsldHc7NcKiiq4Tlk0EhY9voRzW/duu1hdaJ0Vt3Co/f6fk33+mYGzs83sGGvHpwnyJVAqmCpiXvEkjpt3HU77HwPBbBQfahJzloNUb2T/mGth57W+I3kK0yF8+w6gsup7ZDedP3KCuopxlk0LsjPUEd4I6g4I6oVJex0Nxa8WI2LUocRkVgiQyC06wRrBHArlXu1ra+a/3FvmpL/USvnlrJY4o35xTwseRHE0fqho5Y8ck5JJXkwcqx3bA7P100Rqmu3K07ROm01eqgz1Xshn3CqkOXhwHdG9xJa7uBdw8vh4q3By1OQjwo8ux8HK2W7h0Xn+sSkxKTkSHNf1XJvvvt6poKm13Q938koHKkCu0FRJFk4Eg4KYHJDXdD3fyUwSDgpSQQshrkwOWOHJjXIwUlPBUwUkOUwUoFEQnNcmtcscFTa5GkrKa5Ma5YzXJrXJaJPBTGux6JDXKYKCJZLXYTQc+qxWux6JrXYSgUZF08OUwUoHPqpByWCmyE0HKkD0KWCpA5SwUy5qYD0KkDhLB6FSB6FOgrnexNBUw5JBwpgpwFc7mp4KmHJAcmApwG6Yc1NBwmAg8ikhykDhOApohPa4g4KmD1CSCDyK9xt1tDrfcqYmwW9sdFGeGSvqiY6dp+iHYJcfJoJGRnCTGmYUrDMWM4NaNpS5aRmJ+MIEqwvecgBc/nFZe0u6l72yvbquhElVQVLXNqqHPwykNPC4eDgcHI6ZHVCsltV2cdOaAqW3y81QvV3DC1rnR8NPBxAg8DDniOCRxO+wBCzasVujTU0X/w/aaraVy2/TbzOvotuw1hbE0hICF/GdiLkhmiH2vxvq5DVtzJW2a6hornRzW+40kNVS1LDFNDMwPZIwjBa5p5EHwKptvj2HJ2y1GpdmXCSNxMklhnkALPH3eRxwR9R5yOjjyarnoVTkp+PIP04J5jYVolUo8pV4fZzLcsiMxyPpkuO10tV0sVwntN6t1TQV1M8xzU9TE6OSNw6Oa4AgpAOV1R3X2O293itxptWWhoro2FtNc6bEdVB34w/HxN5n4HZb1xnmqI70dlvcHaB811ZCb7pxhJbc6WM5hb/fx8zH+1zb3fFnkrxTq5AnrMd7r9x28j6ZrJ63hObpd4sP34e8ZjmPXLktPAqbXdD3fySgcqQKnQVUSLJwJBwUwOSGu6Hu/kpgkHBSkghZDXJgcscOTGuRgpKeCpgpIcpgpQKIhOa5Na5Y4Km1yNJWU1yY1yxmuTWuS0SeCmNdj0SGuUwUESyWuwmg59Vitdj0TWuwlAoyLp4cpgpQOfVSDksFNkJoOVIHoUsFSBylgplzUwHoVIHCWD0KkD0KdBXO9iaCphySDhTBTgK53NTwVmWy3XC8V0NstNDPWVdQ4MighYXve7wAHMr3e1Ww2s9z5GVsMJtll4sPuNQw4eOoibyMh9MNHUg8lcTbrabRu2ND7tp238VVI3E9fPh9RN5F2Phb9VuB9vNQFWxNLUy8NnvxNwyHM+mat+HcDT1dIjRPhwfmI1n6Rt55c8lpvajsoRwexvu5zhJIMPZaYX5a3/ANZ7fnfstOPEnmFZCioqO3UkVBb6SGmpoGhkUMLAxjGjuDWjkAnIWZ1GqTVUidpMOvuGwch+FbpRqBIUGD2Uky28nW48z6ZDYEIQhRymUIQhBBC/HNa9pY9oc1wwQRkEeC/UIIKtW9fYs0jrUT3/AG4MGm707L3UobigqXc/1QMwk8ubBw/Vycqkut9Aaw25vT7BrOxVNsrG5LBI3LJm5+fG8fC9vm0nw711vXwtZ6F0luFZZNP6ysVNdKKTmGTN+KN3dxRvGHMd9ZpBVhp2II0pZkb3m+I+/XvVLreDZWo3iyvw4n/E8xs5juK5HAqbXdD3fyVlt6uxTqnR/t7/ALaST6itDcvfRFoNdTt8gOUw82gO+qeZVZ3NfG90cjCx7CWua4YII7wQrxKTsGdZpwXX8xzWUVGmTVLi9lNM0Ts3HkdqaCQcFMDkhruh7v5KYJBwV1qOIWQ1yYHLHDkxrkYKSngqYKSHKYKUCiITmuTWuWOCptcjSVlNcmNcsZrk1rktEngpjXY9EhrlMFBEslrsJoOfVYrXY9E1rsJQKMi6eHKYKUDn1Ug5LBTZCaDlSB6FLBW49pOzXrDcf2N3uzX2OwuIcKmZh9tUN7/yMZ7weXxnDefLiwQmpicgyUPtY7tEfmW9PydMmalGECVYXOO7ZxJyA4laz0/p++apukNk09a6i4Vs5wyGFnEfMnoAOpOAOpVsNpOybaLD7G+bkOhuleCHst0ZzSwn65/tT3cuTe8fF3rcWg9uNIbb2r5K0paWUzXY9tO74553DrI88z6cgM8gF6ZUGrYqjzd4Ur7jN/8Akft071rmH8AStPtMVC0SJu/xHT/I89XDaoxRRwxshhjbHHG0NYxowGgcgAB3BSQhVJaHkoySRwxummkayNjS5znHAaB3knoFqbUvag2u07cnW2Ke4Xh0fJ81tiZJC0+HG97Q71bkea1x2x79eKa42Ow09zqYrfU0sk01MyQtjleH4BcB87HTPcq2sf8A9VfaBhWXnZds3NOJDsgNW22srI8X+0Ccpc4+nyDACy13O131A6hszzN+QXSaxXem1BZLff6JkrKe5UsVZE2UAPayRge0OAJAOCM4J9UL4+2HPbTSR/wKg/DsQqRMMEOM9jcgSPFanJxXR5aHFfm5oJ5kL0yEITK6UIQhBBVltnbJt9g3H1Hobci1ewobbe62hpLrRMc7gijncxgmi5k4A5vZz7vh7yrGWS+2XUtshvOn7rS3GhqBxRVFNKJGO+0dR1HeOq5fbxO/O/rkH/iS5/ipF+be7p652wufyno2+zUfGQZqc/HT1AHSSM/C7wz84ZOCFeJnDcKZgtiyx0XWGrYdXh+allEjjiYkph8CeGmwOIBH9QF+4+B4rqgtP7zdmHb3d+Oa5SUwsuoXDLbpSRjMjscvbs5CUd3Pk7kMOxyXnNo+2JojXBgs+tWx6avLyGB8j80U7vqyH9GT4P5fWKsE1zXtD2ODmuGQQcghVZ8ObpMbXdjvP0IWgQ41NxFLENIiMOY2jpmD3FctN19itw9na4xaotRkt8jyynulLl9LN4DixljvquAPI4yOa8A13Q938l2CuVtt14oZ7Xd6CnraOpYY5qeoibJHI09HNcCCPVVK3p7DtPU+31Ds5O2CXm99jqZfyb/KCVx+E/Vecc/nNAAVrpuJIca0Ob9079h57vLks8reBo0teNTvfb8v+Q5b/PmqagkHBTA5PvNkvGm7nUWTUFrqrfXUruCanqYjHJGfMHp1B7iOYWICQcFWoEOFws/ewtJa4WIWQ1yYHLHDkxrkYKbTwVMFJDlMFKBREJzXJrXLHBU2uRpKymuTGuWM1ya1yWiTwUxrseiQ1yY3JIAGc9EESyGuwvQaQ0XqjXl2ZZNKWeevqnYLhG34I25xxPceTG+ZIC2vs72UNU62EN81qZ7BZXYeyJzMVdS0/Raf0bT9Jwz4NIOVcfSGidL6DtDLHpSzwW+lZguEY+OV2McT3H4nu8ySVXKniSBJXhwPff4DmdvId6u9CwVNVO0abvDh/wDI8hs5noCtR7RdlTTGijDe9Zuhv15bh7Ii3NJTO+q0/pHD6Thjuw0EZW9wABgDkhBIaC5xAA5knoqDNzseeidpHdc+XIbFrtPpkrSoPYyjA0eJ4k5lCXVVVNRU8lXW1EVPBE0uklleGMY0d5JPIBae3I7T2idHCW3adc3UN0bluKeQe7RH68ozxejc+BIVYNebr623GqTLqO7OdSh3FFQwfk6eL0Z1Pm4k+anqVhScqFnxfhs3nM8h97Ko4g9oNNo14UA9tFGxp90c3ZdBc77Kxe4var07Zfa2zQdO281o+H3uUObSxnyHJ0n2YHcQSt2WOqmrbLb62ocHS1FLFLIQMZc5gJ5epXN0EELo5pj+jVp/cYPu2rsxRRpWkS8FkuNZJuTmcvzUo3AWJahiOcmYk44WaG6LQLAXLup5kkqr3bRdjVGnP3CX7xV4Y9WD7apxqnTf7hL94q7Merfhp1qXB5HzKzjHLL16ZPEf6hdGtrv6s9I/wKg/DsQjazntjpD+A2/8OxCySb/URPqPmvRVO/Rwvpb5BenQhC512IQhCCC5WbyH87+uf8y3P8VIvJNd0K9TvK7G8Ouh/wAy3P8AFSLyQctflv7LOQ8l5snh/NRPqPmVkArbW0faU3E2ofDQU1Z8r2NhAda615LGNz/ZP5uiPf3ZbzyWlaha7oUwFKjQIUyww4zQRxSZScmJGKI0s8tcNo/NY4HUumG1PaE263aiZTWe5e4Xjhy+1VpDJ845mM90o5Hm05A5kNWzFyJgnmppo6inlfFLE4PjkY4tc1wOQQRzBB6qx20XbM1bpT2Fm3Dil1FamYYKsOAroW+PEeU3+rDvrdFTajhd7LxJM3HynPodv5mtMouPocW0GpjRPzDLqNnMauAVs9ztnNA7uWz5P1jZmSzRsLaauhwyqps/Qkx3Z58LstJ7wVRjefspa+2qM93tsb9Q6cZl/vtNGfa07P7+MZLcDveMt8SO5X50NuLozce1C8aOvtPcIQB7VjTwywuP6sjD8TD6jn0yvRkAjBGQVESVVm6U/szkM2n81KyVXD9OxBD7YWDjk9ttfPY4fgIXHcEg4KYHK/u9PY50ZuB7e+6JMGmr6/L3Mjj/APBVT/rsH6Mk/rMHiS1x5qkmvNuNabY3p1i1pY56CfmYpCOKGoaD8+N4+F49OY7iAeSvVPq0vUR8M2dtBz/dZLWcOztGdeM27Njhl13Hn0uvgtcmByxw5Ma5SYKgE8FTBSQ5TBSgURCc1ya1yTBHLPKyCCN8ksjgxjGAlznE4AAHeSrO7L9ja96hEGod0nT2i3OAfHbIzirnHePaH+xb3cub+8Yb3rlm56BIM7SO63meQXfTaTN1aL2Uoy52nYOZ2fllpbbzbPWm592Fo0hZ5KosI9vUP+CCnaeskh5Dry5uODgFXY2d7L+jNsxDeLwI79qBuHCpnjHsaZ3f+RjPcQf1zl3Llw5IW1dOaZsGkbTDYtM2imt1BAMMggZwjPiernHHNxyT1K+mqHVMQx568OF7jPE8z6DxWvUHBspSrRo/xIu85DkPU691kIXhtxd59BbZQObf7s2WvLeKO3UuJKh/LllvcwHxcQPDKqluV2nNea7MtutMx0/aHnAgpJD7aRv95LyJ68m8I6EHvTNMoE5UyHNGiz5jl03+XFdNcxfTaGCyI7TifK3WepyHXXuBVmNye0LoDboS0Tqz5Xu7AQKGieHFjvCV/wA2PzHN31Sqrbjb8a93IdJSV1f8n2p5+G30ZLIyPCR3zpPtOM9wC1oHEnJPPqphy0WlYdkqbZ9tJ/zH0GQ8+Kxav40qdbvDLuzhH/Fu36jmfLgnA59VNrsJQKkDn1VjBVKITgccx3LpBpf+jNo/caf7tq5uNdhdI9Lf0ZtH7hT/AHbVQ8eH4cDm70Wt+yUWjzXJnm5VY7bJxqnTf8Pl+8VcWuVi+247GqtNfw+X7xVwa5SuHHWpsIcD5lQWNIelW5g8R/qF0k2q57X6PP8AgNv/AA7EL82p/qu0d/ALf+HYhZXN/wB9/M+a36n/AKSF9LfIL1KEIXOutCEIQQXKbeY/nh10D/xLdMH/AN1IvINd0K9ZvOfzxa7/AMy3T8VIvIA55H7Ctdlj8FnIeS83T36mJ9R808OTGu6FY7XdCmBy6FxkLIBUwUhruhTAUoFJIX2tNap1DpC7RXzTF4qrZXwH4JqeQtOOoPRzT1ByD1CtrtH22KGt9jZd2aRtJMfhbeKSMmJx6e1iGS0+LmZGT81o5qmYKY1y4Z6my1QbaM3XvGY6/gUtSq5PUZ+lLP1bWnW09PUWPFda7XdbZe6CG62a4U1dR1LeOGop5WyRyN8WuaSCsHVej9Ma5s0un9W2Slulvm5uhnZnBxgOaRzY4ZOHNII6Fc19t93tebV3D33SN6fFC93FPRTZkpZ/2484z9YYcOhCubtJ2s9CbhextOoyzTd7fhojqJQaad393KcYJ+i7B54BcqPP0Cap57WD7zRtGY6eo8Fq1IxfT6w3+HmQGPOqztbTyJ1dD4rT25vYSvdJUzXLaq9Q1tI4lzbbcZPZzx/VZLjhf5cXDgd5PetF3zYjeXTkrorptpf8MOHSU1G6pjHT58XE3/5XUgEEZByChKlsTTcEaMQB3PPvH2Tc9gOmzTi+CTDJ2DWO4/ey5SwbYbmzyNhh261PI93c1toqCT9gYtkaJ7Iu8+rJo3V9jj09ROI4qi5yBjgOuIm5kz5EAeYXRJCei4rmXNtDYAepXNL+zyRhu0o0Vzhu1D7+i1Ps72btBbRRR18EHyvfuHD7pVxjiYeohZzEQ8wS7xcRyW2F8fVOsNMaJtjrxqq90ttpW5AfM/Bee/hY35z3eTQSqvbndsi5V/tbVtjQGggPwm51bA6c+ccfNrPV3Eefc0qNgSU/W4umLne45D83DuU7NVKk4XgCFqbbJrdbj09SeqslrncrRe3NCK7Vt8hpC9pMNOPjnmx9CMfEefLPcOpCqtuZ2t9W6n9rbNDQv0/bnfCajiBrZB+0OUX+nJH0lom53e53yvmul5uFRW1lQ7jlnnkL3vPmTzWOCrtTcNSsnZ8b33cchyH38Fl9cxvP1K8KW+FD4f1Hm7Z0tzKfNUTVMz6momfLLK4vfI9xc5zj3kk8yV+A5S/MKQPUK1NKoD231pgKm1yUDlSBTgK53NTw5MBWO1yYHJwFMObZOBz6rpNpb+jNo/cKf7tq5rgrpRpb+jFo/cKf7tqouOv7cDm70WseycWjTXJnm5VR7cDuHVmmR/h833ire1ysX25ncOrdMfw6b71VsjkUhh82p0LkfMqIxeL1qPzH+oXTDaj+q3R38At/4diF+bTf1WaN/wAv278NGhZjNf338z5rdpD9LC+lvkF6pCEJhdSEIQgguUO9B/PFrv8AzNdPxUi8eCvW70H88eu/8zXT8VIvIA5Wtyx+CzkPJecZ5v8AMxPqPmmg55H7Cptd0KSCpg55H7CukFcVk8OTGu6FY7XdCmByNJIWQCpgpDXdCmApQKSQntcptckApjXI0S3PtJ2ndwNsTDbZ5zfbEzDfcKyQ8UTc/wBjJzLPQ8Tfq9VbvQ/aY2g1vTxFmqaez1jwOOjurxTOa7wD3H2b/LhcT5Bc4GuTWuULP0GUnzp20Xbxt5j8KtNIxfUaS0Qr6bNztnI5jxHBdR7nuhtxZqX32567sEEPDxtJuERLx3jhaHZd3dAVoHdDto2+l9taNrLf75Lgt+VayMtiafGOI4c71fjn+qQqdtcmNcuaUwtKQHacUl/A6h+dV3VHH1Qm2dnLtEO+0az0Jy7r8V97Umr9S6zuj7zqm9VVyrJCfyk788I+i1vcxv1WgAeC+cx/QrFBTWuVmY1rAGtFgFSHxHRXF8Q3J2nWVkA49FMFJY/oVMHHonAU0QnAqXmEoFTBSwU05qYD1CkDlL8wpA9QnQVzvYmAqbXJQOVIFOArnc1PDl0r0r/Ri0fuFP8AdtXNBrl0t0jIyXSllljOWvt9M5p8QY2qj441w4PN3otU9lQtHmuTfNyqV27HcOrtL/w6b71VojkVke3k7h1fpb+GzfeqsscmVIUA/wDToXI+ZUPi7/vUfmP9QuoG0hztTow/8vW78NGhfm0RztPoo/8ALtt/DRoWZzP99/M+a3SR/Swvpb5BesQhCYXUhCEIIKk/bf2Lloq47y6Zoy6lqiyK+xRt/RS8msqMfRdya7wcGnnxHFRAV2MuFBRXWhqLZcqSKqpKuJ8E8ErA5ksbgQ5rgeRBBIIXOjtMdmm57O3R+otPRzVukK2XEUx+J9A9x5Qynw6Nf17jz77tQKsIjBKRj7wyO8buYWWYxw66DEdUZYe4dbhuO/kdu48Dq0aDlSBSgVMHKtYKztzU0HPI/YVNruhSQVMHPI/YUsFN2Tw5Ma7oVjtd0KYHI0khZAKmCkNd0KYClApJCe1ym1yQCmNcjRLIa5Na5YrXJrXJQKJZLXKYKQ1yY1yNJWQ1yax/QrFBTWuRo1kA49FMFJY/oVMHHolgpBCcCpeYSgVMFLBTTmpgPUKQOUvzC2DtBs9qLdm+NpaFj6W007x79cHMyyJvfwt+lIR3N88nARRpmHLQzFjGzRtQl5GNPRmy8u0ue7ID8y37l6Ds77Oz7mambc7tTOGnbTI19W9w+Gpk72wNPXPe7wb4FwV6wA0BrQAByAHRfJ0ppWyaLsFJpvT1G2noqNgYwDHE89XuP6zieZPUrB3G17ZNstG3LWt/c73W3x5ETCOOaRxDWRt83OIHlzJ5ArKavU4tamgWj3cmjn6n9l6Cw5QoGF5AiIRpH3nu2avRuzqdqqd293Y1hpUf4bN96qvsevQbm7rar3b1PLqXVNWHOGWUtLHyhpIs5EbB/Mnme8leYY9X2mS75SUZAiZgfuser07DqNRizUK+i46r8AB6Lqds+c7S6JPjpy2/ho0Ku3Y838r6+oh2j1bV+2EdOfkSpefiYyJpLqdx6gMaSw9A0t7uEAWb1OTiyc05kQZm44grcKDUoFSkIcWCcgARtBAFx+bCrboQhR6mUIQhBBCxrlbLdebfUWq7UMFZR1cZinp52B8cjD3tc08iFkoRgkG4REBwsVRXf3sWXfTclTqvaOCe52nJkms+S+qpR3n2RPOZg8Pnjl8/mRVh7JIZHQzMcyRji1zXDBaR3gjoV2RWpd3ezLtlu97S4XK3utV7eOV0oA1krz09q3HDKO7v+LAwHBWqm4kdDAhzesfNt67+efNZ9W8EMjkx6cQ0/Kcuh2csuS5kg5UgVuvc3sg7ubePmrLdbf8Aee0x5Lau2MLpWt8ZIOb2nAyeHiaPpLSj2SRSOilY5kjCWua4YLSO8EdCrfLzUGZbpwXAjgs0nafMyD+zmWFp4+mw9FMHPI/YVNruhSQVMHPI/YV1ArhsnhyY13QrHa7oUwORpJCyAVMFIa7oUwFKBSSE9rlNrkgFMa5GiWQ1ya1yxWuTWuSgUSyWuUwUhrkxrkaSshrk1j+hWKCmtcjRrIBx6KYK93t3sXuVuSYp7JYX09ukI/8AMa3MNPw+LSRxSD9gOVsNrOy7oXb90N1vLRqC8sw4TVMY9hC7vzHFzGR9J2TyyOFRM/XZSnghztJ24Z9dysVIwpUKwQ5jdCH8ztQ6bT01cQtD7M9mTUmvXwX7VjJ7Np84e3ibw1NY3v8AybSPhaR+u4dRgHvFzdPadsmlLRT2HTtthoaGlbwxwxDAHiSe8k95JySe9fRQs+qdXmKo+8U2aMgMh9zxWw0PDsnQYdoAu85uOZ+w4DrdCqj/ALQW418Oj9J2yJzhR1NynmmA7jJHEBHn7JJFa5av7Ru0rt4tsqzTtCWNu1HIK+2OfgA1DAR7MnoHtc5ue4EgnuTNLjsl5yHEiZA/tfon6/KxZ2mxoEH+ojVxsb262suYbXJ8ciVW0Vbaq6otdzpJaWrpJXwTwSsLXxSNOHNcDzBBBBCi1y1RrgV5+ewtNivR6XlvDL1TOsHH7+OP2XAefzDxf9uULfvYh2sm1Lq+q3EutIHWqxRvpqfjGWz1crOEgdCGRucT5vZ5oVaqtchykx2IYHEDX9lesPYTj1GSEy6KWAk2A2jf337lexCEKgrX0IQhBBCEIQQQhCEEELxmudmdsNyA52sdGW+uqHDHvYYYqkDp+WjLX48s48l7NCXDiPhO0oZIPDUmo0CFMM7OM0OG4i48VUrWf+z/ANP1RfU6C1vWW9x5tpblCKhhPgJGcLmj1a4rTGp+xnvrpwvfSWGivsDOZlttYx3L9iTgeT6NK6OIU1L4inoGokOHEeosVV5zBVJmiS1pYf8AxPobjusuSd90DrrS2RqXRt7tYbn46ugliby+s5oBHmvhtd0K7ELz93280DqAk33RFguJd3uqrbDKf+rmkqVhYs2RYXcfS3qq9H9nW2BH6FvqD6Lk2HJjXdCumdw7M2xFz4vedtbWziBB93MlP3jHL2bm4Ws9a9mnZO0VFVHbtFeybFTmRo+Uqt2HcJOecpUhBxPKxTo6Lgen3UPM4Dn5dun2jCObv/VUcBUwVYlu0m33/D//ANuf/wDa+vprZjbS4XaKmq9N+0ic1xLffKgdwOOYepA1eA0XIPh91DNw3NRHBoc3XxP2VY2uU2uXQHSPZe2KqrcyuqdCMlmD3jL7jVkY7vm+1wf+i9va9itnLOWuottdPlzDlrp6Jk7geXPMgcc8hzUbFxXKsJDWOJ6D1KnYHs9n4oDnxWAHdpH0C5pUdLV18wpqKlmqJXd0cTC9x9AOa2Fpvs+7y6nc35O0BdIWO/ta5gpGY8czFuR6ZXRu3Wm1WiH3e02ykoouXwU8LY28u7k0ALKXBGxdFOqDDA5m/lZTEt7OIDdczHJ+kAeJv5KnWkew7qOqLJ9bavoqCPvNPb43VEhHgXu4WtPmA5b30P2b9pdCOjqKLTjblWx4Iq7oRUSAjuIaQGNPm1oK2chQc1Wp6b1PiEDcNQ8PVWqQwvSqcQ6FCBdvd7x8dQ6AIAAGAMAIQhRSsCEIQgghCEIILTO9XZY0BvHUm+SSTWK/loa640cbXCfAwPbRnAkwOQILXYAGcABaasn+z4nZdmu1FuTHJbWOBc2joC2eVvUZe8tjPnh/orloUlArE7LQ+yhv1dDbldQU3hqlz0bt40IF22xIvzAIBXx9IaR0/oTTlFpTTFAyjttvj9nDG3mTzy5zj3uc4kkk95JQvsIUe5xeS5xuSptjGwmhjBYDUBuX/9k="
              alt="Learnify Logo"
              className="mr-2 w-12"
            />
            Learnify
          </h2>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-12 mx-14">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">GET HELP</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:text-[#0DAFE6]">
                Contact Us
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-[#0DAFE6]">
                Latest Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0DAFE6]">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">PROGRAMS</h3>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:text-[#0DAFE6]">
                Art & Design
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-[#0DAFE6]">
                Business
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-[#0DAFE6]">
                IT & Software
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:text-[#0DAFE6]">
                Languages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#0DAFE6]">
                Programming
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            CONTACT US
          </h3>
          <p className="mb-2">
            Address: Alpha-Software Technology Park, Canal Rd, near Canal View
            Hotel, Rahim Yar Khan, Pakistan
          </p>
          <p className="mb-2">Tel: + 923030279447</p>
          <p className="mb-2 ">
            <a
              className=" hover:text-[#0DAFE6]"
              href="https://www.helloworldtech.com/"
            >
              https://www.helloworldtech.com/
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#0DAFE6]">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-sm text-gray-500">
        <p>
          Copyright © 2024 Learnify e-learnportal.uno | Powered by HELLO WORLD
          TECHNOLOGIES
        </p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
