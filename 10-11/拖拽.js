var offsetX = 0;
        var offsetY = 0;
        function Drag(id){
            this.odiv = document.getElementById(id);
            var _this = this;
            this.odiv.onmousedown = function(){
                _this.funcDowm();
            }
            document.onmouseup = this.funcUp;
        }
        Drag.prototype.funcDowm = function(ev){
            e = ev||window.event;
            this.offsetX = e.clientX - this.odiv.offsetLeft;
            this.offsetY = e.clientY - this.odiv.offsetTop;

            // alert(this.offsetY);
            var _this = this;
            document.onmousemove = function(ev){
                _this.funcMove(ev);
            }
        }

        Drag.prototype.funcMove = function(ev){
            var e = ev || window.event;
            var l = e.clientX - this.offsetX;
            var t = e.clientY -  this.offsetY;

            
            var windowWidth = document.documentElement.clientWidth ||document.body.clientWidth;
            var windowheigth = document.documentElement.clientHeight ||document.body.clientHeight;
            
            if(l<=0){
                l = 0;
            }
            if(l >= windowWidth - this.odiv.offsetWidth){
                l = windowWidth - this.odiv.offsetWidth;
            }
            if(t<=0){
                t = 0;
            }

            if(t>= windowheigth - this.odiv.offsetHeight){
                t = windowheigth - this.odiv.offsetHeight;
            }
            this.odiv.style.left = l + 'px';
            this.odiv.style.top = t + 'px';
        }
        Drag.prototype.funcUp  = function(){
            document.onmousemove = null;
        }
