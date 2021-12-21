function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function updateMetaContent(){

    let title="";
    let description="";
    let image = "";

    const shareCase = getParameterByName("share_case");

    switch(shareCase){
        case "0":{
            break;
        }   
        case "1":{
            title="I'm Clueless";
            description="I only got one right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teepublic.com%2Fsticker%2F3333789-im-number-one&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABAD";
            break;
        }
        case "2":{
            title="Better than only getting one right, I guess.";
            description="I only got two right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.grabo-balloons.com%2Fen%2Fprodotto%2F812rh-number-2-colourful-rainbow%2F&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABAK";
            break;
        }
        case "3":{
            title="I have no excuses.";
            description="I only got three right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FNumber-Brass-Numbers-Better-Mailboxes%2Fdp%2FB00IPLVJ4C&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABAQ";
            break;
        }
        case "4":{
            title="Well, I know almost 50%.";
            description="I only got four right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.refinery29.com%2Fen-us%2Flife-path-number-numerology-meaning&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABAd";
            break;
        }
        case "5":{
            title="Half I know, half I don't know.";
            description="I only got five right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.homedepot.com%2Fp%2Freviews%2FBarton-6-in-Black-Stainless-Steel-Floating-House-Number-5-90085%2F308870308%2F2&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABAq";
            break;
        }
        case "6":{
            title="I know more than half.";
            description="I only got six right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.123rf.com%2Fphoto_100367162_alphabet-symbol-number-6-composed-of-colorful-stars-isolated-on-white-high-resolution-3d-image.html&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABA1";
            break;
        }
        case "7":{
            title="Getting close!";
            description="I only got seven right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fteaching2and3yearolds.com%2Ffree-dot-numbers-1-10-printables%2F&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABBF";
            break;
        }
        case "8":{
            title="So close, yet so far!";
            description="I only got eight right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Feight-8-number-design-collection-706890%2F&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABBK";
            break;
        }
        case "9":{
            title="I almost got it all!";
            description="I only got nine right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.quickanddirtytips.com%2Feducation%2Fmath%2Fthe-magic-of-number-9-part-1&psig=AOvVaw17d-H07-q7S5RhX14Qqedo&ust=1640135972927000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiLi-Xc8_QCFQAAAAAdAAAAABBV";
            break;
        }
        case "10":{
            title="I got this!";
            description="I only got ten right";
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fsparkling-golden-celebration-number-ten-10th-birthday-gm598150050-102533539&psig=AOvVaw0yKs-Ggdq5U_a947aWVefO&ust=1640136254575000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCJ1-nd8_QCFQAAAAAdAAAAABAD";
            break;
        }
        default:{
            break;
        }
    }

    const titleEl = document.querySelector("meta[name=title]");
    const descriptionEl = document.querySelector("meta[name=description]");
    const imageEl = document.querySelector("link[rel=image_src]");

    titleEl.setAttribute("content", title);
    descriptionEl.setAttribute("content", description);
    imageEl.setAttribute("href", image);
    
}

export {getParameterByName, updateMetaContent}