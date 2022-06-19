var links = '[{ "link": "https://youtube.com/islamstatus360"}, {"link": "https://facebook.com/islamstatus360"}, {"link": "https://instagram.com/islamstatus360"}, {"link": "https://twitter.com/islamstatus360"}, {"link": "https://linkedin.com/company/islamstatus360"}, {"link": "https://pinterest.com/islamstatus360"}, {"link": "https://tiktok.com/@islamstatus360"}, {"link": "https://t.me/islamstatus360"}]';

        var arr = JSON.parse(links);
        console.log(arr);

        for (i = 0; i < document.querySelectorAll('a').length; i++) {
            document.querySelectorAll('a')[i].setAttribute('rel', 'nofollow noopener noreferrer');
        }

        for (i = 0; i < document.querySelectorAll('footer a').length; i++) {
            document.querySelectorAll('footer a')[i].setAttribute('href', arr[i].link);
            document.querySelectorAll('footer a')[i].setAttribute('target', '_blank');
        }